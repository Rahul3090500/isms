import React, { useState } from "react";
import classes from "./Settings.module.scss";

const SettingsItem = ({
  item,
  handleOnChange,
  handleSubmit,
  isButtonLoading,
}: any) => (
  <div className={classes.singleItem}>
    <p className={classes.text1}>{item.text}</p>
    <input
      onChange={ item.id === "videoLink" ? handleOnChange : false}
      placeholder={item.title}
      value={item.value}
      className={classes.text}
      disabled={item.id === "videoLink" ? isButtonLoading : false}
    />
    <button
      disabled={item.id === "videoLink" ? isButtonLoading : false}
      onClick={ item.id === "videoLink" ? handleSubmit : false}
      className={classes.link}
      role="button"
    >
      {item.action}
    </button>
  </div>
);

const Settings = ({
  isButtonLoading,
  handleSubmit,
  handleOnChange,
  youtubeUrl,
}: any) => {
  const [items] = useState([
    {
      id: "videoLink",
      title: "Provide the video link",
      action: "Submit",
      value: youtubeUrl,
      text:"YouTube Video Link"
    },
    {
      id: "channelCredentials",
      title: "Provide the channel credential file",
      action: "Upload",
      value: "",
      text:"Channel Credentials"

    },
    {
      id: "infoDocument",
      title: "Provide the information document in pdf format",
      action: "Upload",
      value: "",
      text:"Information Document"

    },
  ]);

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
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
