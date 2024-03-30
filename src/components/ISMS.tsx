import React, { useEffect, useState } from "react";
import YTSummary from "./ISMS/YTSummary";
import { ChartData } from "chart.js";
import ClassificationCommentTab from "./ISMS/ClassificationCommentTab";
import SentimentTab from "./ISMS/SentimentTab";
import PdfUploader from "./table";
import FileInputModal from "./file";
import { useYoutubeContext } from "@/hooks/urlcontext";
import API from "@/utils/api.config";
import axios from "axios";
import { useRouter } from "next/router";
import SideNav from "./SideNav/SideNav";
import classes from "./ISMS.module.scss";
import Home from "./Home/home";
import AIResponse from "./AI Response/AIResponse";
import Settings from "./Settings/Settings";
import Help from "./Help/help";
import Nav from "./SideNav/nav";

const ISMS = () => {
  const { youtubeUrl, setYoutubeUrl } = useYoutubeContext();
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [videoSummary, setVideoSummary] = useState();
  const [sentimentSummary, setSentimentSummary] = useState();
  const [commentClassifications, setCommentClassifications] = useState();
  const [classifiactionComments, setClassificationComments] = useState();
  const [sentimentComments, setSentimentComments] = useState();
  const [, setLoadingVideoSummary] = useState(false);
  const [, setLoadingSentimentAnalysis] =
    useState(false);
  const [, setLoadingCommentClassifications] =
    useState(false);

  const router = useRouter();
  const query = router.query;
  console.log(query);
  async function getCredentials() {
    try {
      const payload = await localStorage.getItem("data");
      //@ts-ignore
      const data = JSON.parse(payload);
      console.log(data);
      const response = await axios.post("/api/authenticate-and-save", {
        ...data,
        code: query.code,
      });
      const token = response.data.token;
      console.log(token);
      const payloadForFile = {
        token: token?.access_token,
        refresh_token: token?.refresh_token,
        token_uri: "https://oauth2.googleapis.com/token",
        client_id: data.client_id,
        client_secret: data.client_secret,
      };
      console.log(payloadForFile);
      const blob = new Blob([JSON.stringify(payloadForFile)], {
        type: "application/json",
      });
      const formData = new FormData();
      formData.append("filename", blob, "credentials_token.json");
      await fetch(
        `http://20.244.47.51:8080/v1/upload_file?url=${data?.youtubeUrl}`,
        {
          method: "POST",
          body: formData,
        }
      );
      await API.post("/auto_reply_multi_select", {
        url: data?.youtubeUrl,
        model_type: "advanced",
        credential_file: "credentials_token.json",
        reply_list: data?.payload,
      });
    } catch (error) {
      ("");
    }
  }
  useEffect(() => {
    console.log("Successfully");
    if (query?.code) getCredentials();
  }, [query]);

  const [chartData, setChartData] = useState<
    ChartData<"bar", number[], string>
  >({
    labels: ["Positive", "Neutral", "Negative", "Unknown"],
    datasets: [
      {
        label: "comments",
        data: [], // Data will be populated from API
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const [classificationChartData, setclassificationChartData] = useState<
    ChartData<"bar", number[], string>
  >({
    // labels: ["Positive", "Neutral", "Negative", "Unknown"],
    labels: [
      "Declarative",
      "Exlamative",
      "Imperative",
      "Interagotive",
      "Unknown",
    ],
    datasets: [
      {
        label: "classifiactions",
        data: [], // Data will be populated from API
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const handleOnChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setYoutubeUrl(event.target.value);
    setChartData({
      labels: ["Positive", "Neutral", "Negative", "Unknown"],
      datasets: [
        {
          label: "Comments",
          data: [], // Data will be populated from API
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
    setVideoSummary(undefined);
    setSentimentComments(undefined);
    setCommentClassifications(undefined);
    setSentimentComments(undefined);
  };
  const clear = () => {
    setYoutubeUrl("");
    setVideoSummary(undefined);
    setSentimentSummary(undefined);
    setCommentClassifications(undefined);
    setSentimentComments(undefined);
  };

  const updateVideoSummary = async () => {
    setLoadingVideoSummary(true);
    const payload = {
      url: youtubeUrl, // Make sure youtubeUrl is defined somewhere in your component
    };
  
    try {
      const response = await axios.post<any>("/get_video_summary", payload);
      console.log("Video summary response:", response.data);
      setVideoSummary(response.data); // This will now be strongly typed
      await axios.post("/youtube_comment_extract", payload);
    } catch (err: any) {
      console.error("Error fetching video summary:", err);
      // Fallback to dummy data on API failure
      const dummyData: any = {
        channel_name: "Success Is A Journey Not A Destination",
        subscriber_count: 100,
        total_comments: 83,
        video_duration: "2 Minute 15 Second",
        video_likes: 7,
        video_thumbnail: "https://i.ytimg.com/vi/f5YdhPYsk3U/default.jpg",
        video_title: "YouTube comments Sentimental Analysis using ChatGPT",
        video_url: "https://www.youtube.com/watch?v=f5YdhPYsk3U",
        video_views: 102
      };
      setVideoSummary(dummyData);
      console.log("Using dummy data due to API issue.");
  
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    } finally {
      setLoadingVideoSummary(false);
    }
  };
  

  const updateSentimentChartData = async () => {
    setLoadingSentimentAnalysis(true);
    const payload = {
      url: youtubeUrl, // Or a specific URL if needed
    };

    try {
      const apiResponse: any = await API.post(
        "/get_sentiment_analysis",
        payload
      );

      console.log("apiResponse==>", apiResponse);
      // Assuming apiResponse.data contains the necessary data
      const {
        positive_comments,
        neutral_comments,
        negative_comments,
        unknown_comments,
      } = apiResponse.data;

      setSentimentSummary(apiResponse.data);

      setChartData((prevState) => ({
        ...prevState,
        datasets: prevState.datasets.map((dataset) => ({
          ...dataset,
          data: [
            // total_comments,
            positive_comments,
            neutral_comments,
            negative_comments,
            unknown_comments,
          ],
        })),
      }));
    } catch (err) {
      console.error("Error fetching chart data:", err);
      // Use hardcoded values as a fallback
      setChartData((prevState) => ({
        ...prevState,
        datasets: prevState.datasets.map((dataset) => ({
          ...dataset,
          data: [],
        })),
      }));
    } finally {
      setLoadingSentimentAnalysis(false);
    }
  };

  const updateCommentClassificationsChartData = async () => {
    setLoadingCommentClassifications(true);
    const payload = {
      url: youtubeUrl, // Or a specific URL if needed
    };

    try {
      const apiResponse: any = await API.post(
        "/get_sentencetype_advanced",
        payload
      );

      console.log("apiResponse==>", apiResponse);
      // Assuming apiResponse.data contains the necessary data
      const {
        Declarative_comments,
        Exclamative_comments,
        Imperative_comments,
        Interrogative_comments,
        unknown_comments,
      } = apiResponse.data;

      setCommentClassifications(apiResponse.data);

      setclassificationChartData((prevState) => ({
        ...prevState,
        datasets: prevState.datasets.map((dataset) => ({
          ...dataset,
          data: [
            Declarative_comments,
            Exclamative_comments,
            Imperative_comments,
            Interrogative_comments,
            unknown_comments,
          ],
        })),
      }));
    } catch (err) {
      console.error("Error fetching chart data:", err);
      // Use hardcoded values as a fallback
      setChartData((prevState) => ({
        ...prevState,
        datasets: prevState.datasets.map((dataset) => ({
          ...dataset,
          data: [],
        })),
      }));
    } finally {
      setLoadingCommentClassifications(false);
    }
  };

  const fetchAllSentimentAnalysisData = async () => {
    setLoadingSentimentAnalysis(true);
    const payload = {
      url: youtubeUrl, // Or a specific URL if needed
    };
    try {
      // Assuming `api` is your configured Axios instance
      const response: any = await API.post(
        "/fetch_all_sentiment_analysis_data",
        payload
      );
      setSentimentComments(response.data);
      console.log("Fetching sentiment analysis data failed: ", response);
    } catch (error) {
      console.error("Fetching sentiment analysis data failed: ", error);
      // Fallback to local data if API call fails
    } finally {
      setLoadingSentimentAnalysis(false);
    }
  };

  const fetchAllCommentClassificationsData = async () => {
    setLoadingCommentClassifications(true);
    const payload = {
      url: youtubeUrl, // Or a specific URL if needed
    };
    try {
      // Assuming `api` is your configured Axios instance
      const response: any = await API.post(
        "/fetch_all_sentencetype_data_advanced",
        payload
      );
      setClassificationComments(response.data);
      console.log("Fetching sentiment analysis data failed: ", response);
    } catch (error) {
      console.error("Fetching sentiment analysis data failed: ", error);
      // Fallback to local data if API call fails
    } finally {
      setLoadingCommentClassifications(false);
    }
  };

  const handleSubmit = async () => {
    setButtonLoading(true);
    await updateVideoSummary();
    setButtonLoading(false);
  };
  console.log("videoSummary===>", videoSummary);
  const handleSentimentAnalysis = async () => {
    if (sentimentSummary) {
      const {
        positive_comments,
        neutral_comments,
        negative_comments,
        unknown_comments,
      } = sentimentSummary;

      setChartData((prevState) => ({
        ...prevState,
        datasets: prevState.datasets.map((dataset) => ({
          ...dataset,
          data: [
            positive_comments,
            neutral_comments,
            negative_comments,
            unknown_comments,
          ],
        })),
      }));
    } else {
      await updateSentimentChartData();
      await fetchAllSentimentAnalysisData();
    }
  };

  // Function to handle comment classifications
  const handleCommentClassifications = async () => {
    if (commentClassifications) {
      // Note the correction of 'commentClassificatios' to 'commentClassifications'
      const {
        Declarative_comments,
        Exclamative_comments,
        Imperative_comments,
        Interrogative_comments,
        unknown_comments,
      } = commentClassifications;

      setChartData((prevState: any) => ({
        ...prevState,
        datasets: prevState.datasets.map((dataset: any) => ({
          ...dataset,
          data: [
            Declarative_comments,
            Exclamative_comments,
            Imperative_comments,
            Interrogative_comments,
            unknown_comments,
          ],
        })),
      }));
    } else {
      await updateCommentClassificationsChartData();
      await fetchAllCommentClassificationsData();
    }
  };

  return (
    <>
      {GetYtURLComponent(
        handleOnChange,
        clear,
        isButtonLoading,
        handleSubmit,
        videoSummary,
        chartData,
        sentimentComments,
        handleSentimentAnalysis,
        classificationChartData,
        classifiactionComments,
        // loadingCommentClassifications,
        // loadingSentimentAnalysis,
        // loadingVideoSummary,
        youtubeUrl,
        handleCommentClassifications
      )}
    </>
  );
};

export default ISMS;

function GetYtURLComponent(
  handleOnChange: any,
  clear: () => void,
  isButtonLoading: boolean,
  handleSubmit: () => Promise<void>,
  videoSummary: any,
  chartData: any,
  sentimentComments: any,
  handleSentimentAnalysis: any,
  classificationChartData: any,
  classificationComments: any,
  // loadingVideoSummary: any,
  // loadingSentimentAnalysis: any,
  // loadingCommentClassifications: any,
  handleCommentClassifications: any,
  youtubeUrl: any
) {
  const { rowData } = useYoutubeContext();
  const [isFileOpener, setIsFileOpener] = useState(false);

  console.log("rowData: " + rowData);
  const navItems: any = [
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="" />
          <path
            d="M5 13.3333L17 4L29 13.3333V28C29 28.7072 28.719 29.3855 28.219 29.8856C27.7189 30.3857 27.0406 30.6667 26.3333 30.6667H7.66667C6.95942 30.6667 6.28115 30.3857 5.78105 29.8856C5.28095 29.3855 5 28.7072 5 28V13.3333Z"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 30.3333V17H21V30.3333"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Home",
      path: "/",
      content: <Home />,
    },
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="" />
          <path
            d="M24.7778 15.2222H3"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31 9H3"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31 21.4443H3"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.7778 27.6667H3"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Summary",
      path: "/summary",
      content: (
        <YTSummary
          videoSummary={videoSummary}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          clear={clear}
        />
      ),
    },
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="" />
          <path
            d="M29 18H24.2L20.6 29L13.4 7L9.8 18H5"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Sentiments",
      path: "/sentiments",
      content: (
        <SentimentTab
          chartData={chartData}
          sentimentComments={sentimentComments}
          handleSentimentAnalysis={handleSentimentAnalysis}
        />
      ),
    },
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="" />
          <path
            d="M14.3333 6H5V15.3333H14.3333V6Z"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.6667 10.6667C19.6667 13.244 21.7561 15.3333 24.3334 15.3333C26.9107 15.3333 29.0001 13.244 29.0001 10.6667C29.0001 8.08934 26.9107 6 24.3334 6C21.7561 6 19.6667 8.08934 19.6667 10.6667Z"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.0001 20.6667H19.6667V30.0001H29.0001V20.6667Z"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.3333 20.6667H5V30.0001H14.3333V20.6667Z"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Classification",
      path: "/classification",
      content: (
        <ClassificationCommentTab
          classificationChartData={classificationChartData}
          classifiactionComments={classificationComments}
        />
      ),
    },
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="" />
          <path
            d="M25 6C23.9391 6 22.9217 6.42143 22.1716 7.17157C21.4214 7.92172 21 8.93913 21 10V26C21 27.0609 21.4214 28.0783 22.1716 28.8284C22.9217 29.5786 23.9391 30 25 30C26.0609 30 27.0783 29.5786 27.8284 28.8284C28.5786 28.0783 29 27.0609 29 26C29 24.9391 28.5786 23.9217 27.8284 23.1716C27.0783 22.4214 26.0609 22 25 22H9C7.93913 22 6.92172 22.4214 6.17157 23.1716C5.42143 23.9217 5 24.9391 5 26C5 27.0609 5.42143 28.0783 6.17157 28.8284C6.92172 29.5786 7.93913 30 9 30C10.0609 30 11.0783 29.5786 11.8284 28.8284C12.5786 28.0783 13 27.0609 13 26V10C13 8.93913 12.5786 7.92172 11.8284 7.17157C11.0783 6.42143 10.0609 6 9 6C7.93913 6 6.92172 6.42143 6.17157 7.17157C5.42143 7.92172 5 8.93913 5 10C5 11.0609 5.42143 12.0783 6.17157 12.8284C6.92172 13.5786 7.93913 14 9 14H25C26.0609 14 27.0783 13.5786 27.8284 12.8284C28.5786 12.0783 29 11.0609 29 10C29 8.93913 28.5786 7.92172 27.8284 7.17157C27.0783 6.42143 26.0609 6 25 6Z"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "AI Response",
      path: "/ai-response",
      content: <AIResponse />,
    },
    {
      icon: (
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
            stroke="#676767"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.4 21C25.2669 21.3016 25.2272 21.6362 25.286 21.9606C25.3448 22.285 25.4995 22.5843 25.73 22.82L25.79 22.88C25.976 23.0657 26.1235 23.2863 26.2241 23.5291C26.3248 23.7719 26.3766 24.0322 26.3766 24.295C26.3766 24.5578 26.3248 24.8181 26.2241 25.0609C26.1235 25.3037 25.976 25.5243 25.79 25.71C25.6043 25.896 25.3837 26.0435 25.1409 26.1441C24.8981 26.2448 24.6378 26.2966 24.375 26.2966C24.1122 26.2966 23.8519 26.2448 23.6091 26.1441C23.3663 26.0435 23.1457 25.896 22.96 25.71L22.9 25.65C22.6643 25.4195 22.365 25.2648 22.0406 25.206C21.7162 25.1472 21.3816 25.1869 21.08 25.32C20.7842 25.4468 20.532 25.6572 20.3543 25.9255C20.1766 26.1938 20.0813 26.5082 20.08 26.83V27C20.08 27.5304 19.8693 28.0391 19.4942 28.4142C19.1191 28.7893 18.6104 29 18.08 29C17.5496 29 17.0409 28.7893 16.6658 28.4142C16.2907 28.0391 16.08 27.5304 16.08 27V26.91C16.0723 26.579 15.9651 26.258 15.7725 25.9887C15.5799 25.7194 15.3107 25.5143 15 25.4C14.6984 25.2669 14.3638 25.2272 14.0394 25.286C13.715 25.3448 13.4157 25.4995 13.18 25.73L13.12 25.79C12.9343 25.976 12.7137 26.1235 12.4709 26.2241C12.2281 26.3248 11.9678 26.3766 11.705 26.3766C11.4422 26.3766 11.1819 26.3248 10.9391 26.2241C10.6963 26.1235 10.4757 25.976 10.29 25.79C10.104 25.6043 9.95653 25.3837 9.85588 25.1409C9.75523 24.8981 9.70343 24.6378 9.70343 24.375C9.70343 24.1122 9.75523 23.8519 9.85588 23.6091C9.95653 23.3663 10.104 23.1457 10.29 22.96L10.35 22.9C10.5805 22.6643 10.7352 22.365 10.794 22.0406C10.8528 21.7162 10.8131 21.3816 10.68 21.08C10.5532 20.7842 10.3428 20.532 10.0745 20.3543C9.80618 20.1766 9.49179 20.0813 9.17 20.08H9C8.46957 20.08 7.96086 19.8693 7.58579 19.4942C7.21071 19.1191 7 18.6104 7 18.08C7 17.5496 7.21071 17.0409 7.58579 16.6658C7.96086 16.2907 8.46957 16.08 9 16.08H9.09C9.42099 16.0723 9.742 15.9651 10.0113 15.7725C10.2806 15.5799 10.4857 15.3107 10.6 15C10.7331 14.6984 10.7728 14.3638 10.714 14.0394C10.6552 13.715 10.5005 13.4157 10.27 13.18L10.21 13.12C10.024 12.9343 9.87653 12.7137 9.77588 12.4709C9.67523 12.2281 9.62343 11.9678 9.62343 11.705C9.62343 11.4422 9.67523 11.1819 9.77588 10.9391C9.87653 10.6963 10.024 10.4757 10.21 10.29C10.3957 10.104 10.6163 9.95653 10.8591 9.85588C11.1019 9.75523 11.3622 9.70343 11.625 9.70343C11.8878 9.70343 12.1481 9.75523 12.3909 9.85588C12.6337 9.95653 12.8543 10.104 13.04 10.29L13.1 10.35C13.3357 10.5805 13.635 10.7352 13.9594 10.794C14.2838 10.8528 14.6184 10.8131 14.92 10.68H15C15.2958 10.5532 15.548 10.3428 15.7257 10.0745C15.9034 9.80618 15.9987 9.49179 16 9.17V9C16 8.46957 16.2107 7.96086 16.5858 7.58579C16.9609 7.21071 17.4696 7 18 7C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V9.09C20.0013 9.41179 20.0966 9.72618 20.2743 9.99447C20.452 10.2628 20.7042 10.4732 21 10.6C21.3016 10.7331 21.6362 10.7728 21.9606 10.714C22.285 10.6552 22.5843 10.5005 22.82 10.27L22.88 10.21C23.0657 10.024 23.2863 9.87653 23.5291 9.77588C23.7719 9.67523 24.0322 9.62343 24.295 9.62343C24.5578 9.62343 24.8181 9.67523 25.0609 9.77588C25.3037 9.87653 25.5243 10.024 25.71 10.21C25.896 10.3957 26.0435 10.6163 26.1441 10.8591C26.2448 11.1019 26.2966 11.3622 26.2966 11.625C26.2966 11.8878 26.2448 12.1481 26.1441 12.3909C26.0435 12.6337 25.896 12.8543 25.71 13.04L25.65 13.1C25.4195 13.3357 25.2648 13.635 25.206 13.9594C25.1472 14.2838 25.1869 14.6184 25.32 14.92V15C25.4468 15.2958 25.6572 15.548 25.9255 15.7257C26.1938 15.9034 26.5082 15.9987 26.83 16H27C27.5304 16 28.0391 16.2107 28.4142 16.5858C28.7893 16.9609 29 17.4696 29 18C29 18.5304 28.7893 19.0391 28.4142 19.4142C28.0391 19.7893 27.5304 20 27 20H26.91C26.5882 20.0013 26.2738 20.0966 26.0055 20.2743C25.7372 20.452 25.5268 20.7042 25.4 21Z"
            stroke="#676767"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Settings",
      path: "/settings",
      content: (
        <Settings
          handleSubmit={handleSubmit}
          isButtonLoading={isButtonLoading}
          clear={clear}
          youtubeUrl={youtubeUrl}
          handleOnChange={handleOnChange}
        />
      ),
    },
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" fill="" />
          <path
            d="M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z"
            stroke="#676767"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.0901 15.0001C15.3252 14.3317 15.7892 13.7682 16.4 13.4092C17.0108 13.0502 17.729 12.919 18.4273 13.0388C19.1255 13.1586 19.7589 13.5216 20.2152 14.0636C20.6714 14.6056 20.9211 15.2916 20.9201 16.0001C20.9201 18.0001 17.9201 19.0001 17.9201 19.0001"
            stroke="#676767"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 23H18.01"
            stroke="#676767"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Help",
      path: "/help",
      content: <Help />,
    },
  ];
  //@ts-ignore
  const [selectedContent, setSelectedContent] = useState(navItems[0].content);
  const handleItemClick = (content: any) => {
    setSelectedContent(content);
    handleSentimentAnalysis();
  };

  
  return (
    <>
      <div className={classes.main}>
        <SideNav
          navItems={navItems}
          selectedContent={selectedContent}
          onItemSelect={handleItemClick}
          videoSummary={videoSummary}
          setIsFileOpener={setIsFileOpener}
          handleSentimentAnalysis={handleSentimentAnalysis}
          handleCommentClassifications={handleCommentClassifications}
        />
        <Nav
          navItems={navItems}
          selectedContent={selectedContent}
          onItemSelect={handleItemClick}
          videoSummary={videoSummary}
          setIsFileOpener={setIsFileOpener}
          handleSentimentAnalysis={handleSentimentAnalysis}
          handleCommentClassifications={handleCommentClassifications}
        />

        <div className={classes.rightSide}>{selectedContent}</div>
      </div>

      {isFileOpener && (
        <FileInputModal IsOpen={isFileOpener} setIsOpen={setIsFileOpener} />
      )}
      {rowData.length > 0 && <PdfUploader />}
    </>
  );
}
