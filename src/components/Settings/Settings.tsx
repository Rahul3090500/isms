import React, { useState } from "react";
import classes from "./Settings.module.scss";
import { useYoutubeContext } from "@/hooks/urlcontext";

const SettingsItem = ({
  item,
  handleOnChange,
  handleSubmit,
  isButtonLoading,
  setItems,
  youtubeUrl,
  setIsFileOpener,
}: any) => {
  return (
    <div className={classes.singleItem}>
      <p className={classes.text1}>{item.text}</p>
      <input
        onChange={(event) => {
          if (item.id === "videoLink") {
            setItems((prev: any[]) =>
              prev.map((item) =>
                item.id === "videoLink"
                  ? { ...item, value: event.target.value }
                  : item
              )
            );
            handleOnChange(event);
          }
        }}
        placeholder={item.title}
        value={item.value}
        className={classes.text}
        disabled={item.id === "videoLink" ? isButtonLoading : false}
      />
      <button
        disabled={item.id === "videoLink" ? isButtonLoading : false}
        onClick={() => {
          if (item.id === "videoLink") handleSubmit(youtubeUrl);
          if (item.id === "infoDocument")setIsFileOpener(true)
        }
      
      }
        className={classes.link}
        role="button"
      >
        {item.action}
      </button>
    </div>
  );
};

const Settings = ({
  isButtonLoading,
  handleSubmit,
  handleOnChange,
  setIsFileOpener,
}: any) => {
  const { youtubeUrl } = useYoutubeContext();

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
            handleSubmit={handleSubmit}
            isButtonLoading={isButtonLoading}
            setItems={setItems}
            youtubeUrl={youtubeUrl}
            setIsFileOpener={setIsFileOpener}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
