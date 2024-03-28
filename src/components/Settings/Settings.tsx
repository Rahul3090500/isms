import SubmitButton from "../ISMS/SubmitButton";
import YTURLInput from "../ISMS/YTURLInput";
import classes from "./Settings.module.scss";
const Settings = ({
  youtubeUrl,
  handleOnChange,
  clear,
  isButtonLoading,
  handleSubmit,
}: any) => {
  return (
    <div className={classes.Settings}>
      <div className={classes.header}>
        <span className={classes.text}>Settings</span>
      </div>
      <div className={classes.sub_header}>Configuration and Inputs </div>
      <div className={classes.dec}>
        <YTURLInput
          youtubeUrl={youtubeUrl}
          onChange={handleOnChange}
          onClear={clear}
        />
        <SubmitButton
          isLoading={isButtonLoading}
          onSubmit={handleSubmit}
          buttonText="Save"
        />
      </div>
    </div>
  );
};

export default Settings;
