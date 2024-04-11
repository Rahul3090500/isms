/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import classes from "./YTSummary.module.scss";
import YTURLInput from "../../components/ISMS/YTURLInput";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const YTSummary = ({
  videoSummary,
  handleOnChange,
  clear,
  handleSubmit,
  loadingVideoSummary,
}: any) => {
  console.log("videoSummary123", videoSummary);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsButtonLoading(true);
    handleSubmit();
    // Set isButtonLoading to false after 2 seconds
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };

  // console.log('videoSummary.subsciber_count',videoSummary.subscriber_count )
  return (
    <>
      <div className={classes.YTSummary}>
        <div className={classes.header}>
          <span className={classes.text}>Summary</span>
          <span onClick={videoSummary && handleClick} style={{opacity:!videoSummary ?.4:1, cursor:!videoSummary ? "default":"pointer" }} className={classes.refresh}>
            <span>
              <svg
                className={isButtonLoading ? classes.refresh_animate : ""}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="35" fill="" />
                <path
                  d="M29 9.99756V15.9976H23"
                  stroke="#070da1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 25.9976V19.9976H13"
                  stroke="#070da1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976"
                  stroke="#070da1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Refresh
          </span>{" "}
        </div>
        <div className={classes.sub_header}>
          Provides the video summary insights
        </div>
        {loadingVideoSummary ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {!videoSummary ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4,
                  m: 2,
                  border: "1px dashed #1976d2",
                  borderRadius: "8px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  gutterBottom
                  sx={{ textAlign: "center", mb: 2 }}
                >
                  To unlock full insights, kindly add your YouTube video link in
                  Settings.
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{ textAlign: "center", mb: 3 }}
                >
                  Caze iSMS provides AI-driven analysis for your social media
                  channels, offering sentiment analysis, comment classification,
                  and more. Start optimizing your digital marketing by
                  integrating your YouTube Video!
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => router.push("/settings")}
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  Go to Settings
                </Button>
              </Box>
            ) : (
              <div className={classes.dec}>
                <div className={classes.video}>
                  <div className={classes.videoUrl}>
                    <YTURLInput
                      youtubeUrl={videoSummary?.video_url}
                      onChange={handleOnChange}
                      onClear={clear}
                    />
                  </div>
                  <div className={classes.YT_video}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={videoSummary?.video_url}
                    >
                      {/* {videoID && (
              <iframe
                width="100%"
                height="600"
                src={videoSummary.video_thumbnail}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}         */}
                      <img src={videoSummary?.video_thumbnail} alt="" />
                    </a>
                  </div>

                  <div className={classes.clannelDetails}>
                    <p className={classes.video_title}>
                      {videoSummary?.video_title}
                    </p>
                    <div className={classes.bottom}>
                      <div className={classes.leftSide}>
                        <p className={classes.channel_name}>
                          {/* <span className={classes.img}>
                            <img
                              width={100}
                              height={100}
                              src={videoSummary?.video_thumbnail}
                              alt={videoSummary?.video_title}
                            />
                          </span> */}

                          <span className={classes.titles}>
                            <span className={classes.name}>
                              {videoSummary?.channel_name}
                            </span>
                            <span className={classes.subsciber_count}>
                              {videoSummary?.subsciber_count}{" "}
                              <span style={{ marginRight: "10px" }}>
                                {" "}
                                Subscribers
                              </span>
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className={classes.rightSide}>
                        <p className={`${classes.views} ${classes.videoStat}`}>
                          <span className={classes.iconSpan}>
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="35" height="35" fill="" />
                              <path
                                d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
                                stroke="#070da1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M7 18C7 18 11 10 18 10C25 10 29 18 29 18C29 18 25 26 18 26C11 26 7 18 7 18Z"
                                stroke="#070da1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                          {videoSummary?.video_views}{" "}
                          <span style={{ marginLeft: "10px" }}>Views</span>
                        </p>
                        <p className={`${classes.likes} ${classes.videoStat}`}>
                          <span className={classes.iconSpan}>
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="35" height="35" fill="" />
                              <path
                                d="M12.3346 16.8999L16.6024 7C17.4513 7 18.2654 7.34768 18.8657 7.96654C19.4659 8.58541 19.8032 9.42477 19.8032 10.3V14.7H25.842C26.1513 14.6963 26.4577 14.7621 26.7399 14.8927C27.0221 15.0233 27.2734 15.2156 27.4764 15.4562C27.6793 15.6969 27.8291 15.9801 27.9154 16.2864C28.0016 16.5927 28.0223 16.9146 27.9758 17.2299L26.5035 27.1299C26.4263 27.6545 26.1679 28.1326 25.7757 28.4763C25.3836 28.8199 24.8842 29.0059 24.3696 28.9999H12.3346M12.3346 16.8999V28.9999M12.3346 16.8999H9.13386C8.56792 16.8999 8.02517 17.1317 7.62499 17.5443C7.22482 17.9569 7 18.5165 7 19.0999V26.7999C7 27.3833 7.22482 27.9429 7.62499 28.3555C8.02517 28.7681 8.56792 28.9999 9.13386 28.9999H12.3346"
                                stroke="#070da1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                          {videoSummary?.video_likes}{" "}
                          <span style={{ marginLeft: "10px" }}>Likes</span>
                        </p>
                        <p
                          className={`${classes.duration} ${classes.videoStat}`}
                        >
                          <span className={classes.iconSpan}>
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="35" height="35" fill="" />
                              <path
                                d="M18 12V18L22 20"
                                stroke="#070da1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z"
                                stroke="#070da1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                          Duration {videoSummary?.video_duration}
                        </p>
                        <p
                          className={`${classes.total_comments} ${classes.videoStat}`}
                        >
                          <span className={classes.iconSpan}>
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="35" height="35" fill="" />
                              <path
                                d="M27 21C27 21.5304 26.7893 22.0391 26.4142 22.4142C26.0391 22.7893 25.5304 23 25 23H13L9 27V11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9H25C25.5304 9 26.0391 9.21071 26.4142 9.58579C26.7893 9.96086 27 10.4696 27 11V21Z"
                                stroke="#070da1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                          Comments: {videoSummary?.total_comments}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default YTSummary;
