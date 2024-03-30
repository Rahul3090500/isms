import React from "react";
import classes from "./help.module.scss";

interface HelpItemProps {
  title: string;
  action: string;
  href: string;
}

// Updated HelpItem to accept and use href
const HelpItem = ({ title, action, href }: HelpItemProps) => (
  <div className={classes.singleItem}>
    <p className={classes.text}>{title}</p>
    {/* Use an anchor tag with role="button" to mimic button behavior with a link */}
    <a href={href} className={classes.link} role="button">{action}</a>
  </div>
);

// Added hrefs to each help item
const helpItems = [
  { title: "How to Create Channel Credentials", action: "Watch Video", href: "https://example.com/channel-credentials" },
  { title: "ISMS User Guide", action: "Download", href: "https://example.com/user-guide.pdf" },
  { title: "Feedback / Suggestions", action: "Email", href: "mailto:support@example.com" },
];

const Help = () => {
  return (
    <div className={classes.help}>
      <div className={classes.header}>
        <span className={classes.text}>Help</span>
      </div>
      <div className={classes.sub_header}>Support information and guides</div>
      <div className={classes.dec}>
        {helpItems.map((item, index) => (
          <HelpItem key={index} title={item.title} action={item.action} href={item.href} />
        ))}
        <div className={classes.box}>
          <p className={classes.text}>ISMS Version Information</p>
          <p className={classes.text}>Version : 202403v.3</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
