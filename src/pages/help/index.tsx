import React, { useRef } from "react";
import classes from "./help.module.scss";

interface HelpItemProps {
  title: string;
  action: string;
  href: string;
  videoRef: any;
  handleClick: any;
}

const HelpItem = ({
  title,
  href,
  videoRef,
  handleClick,
  action,
}: HelpItemProps) => (
  <div className={classes.singleItem}>
    {/* <p className={classes.text}>{title}</p> */}
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      controls
      src="/video/client_Outh2.mp4"
      poster="https://storage.googleapis.com/media-session/caminandes/artwork-512.png"
      width="100%"
      loop
      style={{ display: "none" }}
    />
    {action === "Watch Video" ? (
      <p
        onClick={() => {
          action === "Watch Video" ? handleClick() : "";
        }}
        className={classes.text}
      >
        {title}
      </p>
    ) : (
      <a
        href={href}
        onClick={() => {
          action === "Watch Video" ? handleClick() : "";
        }}
        className={classes.text}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    )}
  </div>
);

const helpItems = [
  {
    title: "How to Create Channel Credentials",
    action: "Watch Video",
    href: "",
  },
  {
    title: "ISMS User Guide",
    action: "Download",
    href: "https://example.com/user-guide.pdf",
  },
  {
    title: "Feedback / Suggestions",
    action: "Email",
    href: "mailto:support@cazelabs.com",
  },
];

const Help = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = () => handlePictureInPicture(videoRef);
  const handlePictureInPicture = async (
    videoRef: React.RefObject<HTMLVideoElement>
  ) => {
    if (!videoRef.current) return;
    try {
      if (videoRef.current !== document.pictureInPictureElement) {
        await videoRef.current.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.help}>
      <div className={classes.header}>
        <span className={classes.text}>Help</span>
      </div>
      <div className={classes.sub_header}>Support information and guides</div>
      <div className={classes.dec}>
        {helpItems.map((item, index) => (
          <HelpItem
            key={index}
            handleClick={handleClick}
            title={item.title}
            action={item.action}
            href={item.href}
            videoRef={videoRef}
          />
        ))}
        <div className={classes.box}>
          <p className={classes.text}>ISMS Version Information</p>
          <p className={classes.text}>Version: 202403v.3</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
