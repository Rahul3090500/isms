import React, { useEffect, useState } from "react";
import classes from "./Settings.module.scss";
import { useYoutubeContext } from "@/hooks/urlcontext";
import { useRouter } from "next/router";

const SettingsItem = ({
  item,
  handleOnChange,
  isButtonLoading,
  setItems,
  videoSummary,
  // youtubeUrl,
  setIsFileOpener,
  errorMessage
}: any) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  const { dataFileName } = useYoutubeContext();

  useEffect(() => {
    const shouldDisable = () => {
      if (item.id === "videoLink") {
        return isButtonLoading || !item.value;
      } else if (item.id === "infoDocument") {
        return setIsDisabled(false);
      } else {
        return !item.value;
      }
    };

    setIsDisabled(shouldDisable());
  }, [isButtonLoading, videoSummary, item.id, item.value]);

  return (
    <div className={classes.singleItem}>
      <p className={classes.text1}>{item.text}</p>
      {item.id === "infoDocument" ? (
        <p className={classes.text}>{dataFileName || item.title}</p>
      ) : (<>
        <input
          type="text" // or 'file' based on your specific need
          onChange={(event) => {
            if (item.id === "videoLink") {
              setItems((prev: any) =>
                prev.map((itm: any) =>
                  itm.id === "videoLink"
                    ? { ...itm, value: event.target.value }
                    : itm
                )
              );
              handleOnChange(event);
            }
          }}
          placeholder={item.title}
          value={item.value}
          className={classes.text}
          style={{border: errorMessage ?"1px solid red":""}}
          disabled={
            item.id === "infoDocument" || item.id === "channelCredentials"
          }
        />
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        </>
      )}

      <button
        disabled={isDisabled}
        onClick={() => {
          if (item.id === "videoLink") {
            router.push("/summary"); // Navigate to /summary
          } else if (item.id === "infoDocument") {
            setIsFileOpener(true); // Open the file opener for infoDocument
          }
          // If you have other item IDs to handle, you can add more conditions here
        }}
        className={classes.link}
        style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
      >
        {item.action}
      </button>
    </div>
  );
};

const Settings = ({
  isButtonLoading,
  handleOnChange,
  setIsFileOpener,
  errorMessage
}: any) => {
  const { youtubeUrl } = useYoutubeContext();

  // Sync the local youtubeUrl state to the global context

  console.log("youtubeUrl====>", youtubeUrl);
  const [items, setItems] = useState([
    {
      id: "videoLink",
      title: "Provide the video link",
      action: "Submit",
      value: youtubeUrl,
      text: "YouTube Video Link",
    },
    // {
    //   id: "channelCredentials",
    //   title: "Provide the channel credential file",
    //   action: "Upload",
    //   value: "",
    //   text: "Channel Credentials",
    // },
    {
      id: "infoDocument",
      title: "Provide the information document in pdf format",
      action: "Upload",
      value: "",
      text: "Information Document",
    },
  ]);

  console.log("youtuv=be Url ===>", youtubeUrl);

  return (
    <div className={classes.Settings}>
      <div className={classes.header}>
        <span className={classes.text}>Settings</span>
      </div>
      <div className={classes.sub_header}>Configuration and Inputs</div>

      <div className={classes.dec}>
        {items.map((item) => (
          <SettingsItem
            key={item.id}
            item={item}
            handleOnChange={handleOnChange}
            isButtonLoading={isButtonLoading}
            setItems={setItems}
            youtubeUrl={youtubeUrl}
            setIsFileOpener={setIsFileOpener}
            errorMessage={errorMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
