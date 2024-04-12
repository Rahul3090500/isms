import Link from "next/link";
import classes from "./home.module.scss";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.header}>Intelligent Social Media Sense</div>
      <div className={classes.sub_header}>Optimize Your Marketing!</div>
      <div className={classes.dec_header}>Insights | Sentiments | Responses</div>
      <div className={classes.dec}>
        Caze iSMS (intelligent Social Media Sense provides comprehensive
        insights to your social media channels. It does an Al (Artificial
        Intelligence) based channel and comments analysis to provide sentiments
        comments classifications and more. It has a capability of identifying
        queries from your customers and our Al engine provide suitable answers
        automatically. You can review, customize and do bulk reply to those
        queries!<br></br> <br></br>Caze iSMS works as a companion to manage and optimize your
        customer engagements. Currently it supports youtube based analysis. We
        are adding more social media platforms along with intuitive features to
        empower your digital marketing!<br></br> <br></br> Add your youtube channel links and
        information documents under &quot;<Link style={{fontWeight:"bold",textDecoration:"underline"}} href="/settings">Settings</Link>&quot; to start your journey
        with iSMS!
      </div>
    </div>
  );
};

export default Home;
