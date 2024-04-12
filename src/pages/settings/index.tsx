import React, { useEffect, useState } from "react";
import classes from "./Settings.module.scss";
import { useYoutubeContext } from "@/hooks/urlcontext";

const SettingsItem = ({
  item,
  handleOnChange,
  isButtonLoading,
  setItems,
  videoSummary,
  // youtubeUrl,
  setIsFileOpener,
  errorMessage,
  setOpenCredentialsFile
}: any) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { dataFileName ,uploadedFileName } = useYoutubeContext();

  useEffect(() => {
    const shouldDisable = () => {
      if (item.id === "videoLink") {
        return isButtonLoading || !item.value;
      } else if (item.id === "infoDocument") {
        return setIsDisabled(false);
      } else if (item.id === "channelCredentials")  {
        return setIsDisabled(false);
      }
    };

    setIsDisabled(shouldDisable());
  }, [isButtonLoading, videoSummary, item.id, item.value]);

  return (
<div className={classes.singleItem}>
  <p className={classes.text1}>{item.text}</p>
  {item.id === "infoDocument" ? (
    <p className={classes.text}>{dataFileName || item.title}</p>
  ) : item.id === "channelCredentials" ? (
    <p className={classes.text}>{uploadedFileName || item.title}</p>
  ) : (
    <>
      <input
        type="text" // Change 'text' to 'file' if you need a file input
        onChange={(event) => {
          if (item.id === "videoLink") {
            setItems((prev: any) =>
              prev.map((itm: any) =>
                itm.id === "videoLink"
                  ? { ...itm, value: event.target.value }
                  : itm
              )
            );
            handleOnChange(event); // Ensure this function is defined to handle changes
          }
        }}
        placeholder={item.title}
        value={item.value}
        className={classes.text}
        style={{ border: errorMessage ? "1px solid red" : "" }}
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
      if (item.id === "channelCredentials") {
        setOpenCredentialsFile(true);
      } else if (item.id === "infoDocument") {
        setIsFileOpener(true); // This should likely trigger a state that opens a file picker dialog
      }
      // Additional item IDs can be handled with more conditions here
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
  errorMessage,
  setOpenCredentialsFile
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
    {
      id: "channelCredentials",
      title: "Provide the channel credential file",
      action: "Upload",
      value: "",
      text: "Channel Credentials",
    },
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
            setOpenCredentialsFile={setOpenCredentialsFile}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
