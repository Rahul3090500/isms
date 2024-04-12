import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

import { useYoutubeContext } from "@/hooks/urlcontext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FileInputModal({
  IsOpen,
  setIsOpen,
  videoSummary,
}: any) {
  const { setDataFileName, youtubeUrl, dataFileName } = useYoutubeContext();
  const [rowData, setRowData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (!file) {
      toast.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("filename", file);

    try {
      const response = await fetch(
        `http://20.244.47.51:8080/v1/upload_file?url=${youtubeUrl}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setDataFileName(file.name);
        toast.success("File uploaded successfully!");
      } else {
        // You can customize this message based on the response status or message
        toast.error("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file");
    }
  };

  const handleFileSubmit = async () => {
    if (!dataFileName || !youtubeUrl) {
      console.log("No file selected or YouTube URL missing.");
      toast.error("No file selected or YouTube URL missing.");
      return; // Exit if no file is selected or if the YouTube URL is missing
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://20.244.47.51:8080/v1/query_answer", {
        method: "POST",
        body: JSON.stringify({
          url: youtubeUrl,
          pdf_file: dataFileName,
          model_type: "advanced",
        }),
        headers: {
          "Content-Type": "application/json",
          // Include other headers as required, such as Authorization for Bearer tokens
        },
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const res = await response.text(); // Use .text() first to handle non-JSON responses
      const processedResponse = res.replace(/NaN/g, "0");

      const data = JSON.parse(processedResponse);
      setRowData(data);
      localStorage.setItem("Response", JSON.stringify(data)); // Update global state with the parsed data

      console.log("Data successfully fetched and processed", data);
    } catch (error: any) {
      console.error("Error during file submission:", error);
      setError(error.message || "An unknown error occurred");
      toast.error("Error during file submission:", error);
    } finally {
      setIsLoading(false);
      setIsOpen(false); // Close the modal
      // router.push("/ai-response"); // Navigate after actions are complete
    }
  };

  console.log(rowData, "rowDataaaaaa");

  return (
    <>
      <Dialog
        open={IsOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        {videoSummary ? (
          <>
            <DialogTitle
              id="responsive-dialog-title"
              sx={{ fontWeight: "bold", textAlign: "center", width: "500px" }}
            >
              To unlock AI response, Kindly add YouTube URL, Credential File and Information File.
            </DialogTitle>
            <DialogContent dividers>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    maxWidth: "300px",
                    margin: "10px auto",
                  }}
                >
                  <input
                    type="file"
                    id="file-input"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="file-input"
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      textAlign: "center",
                      backgroundColor: "#007bff",
                      color: "white",
                      borderRadius: "8px",
                      cursor: "pointer",
                      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                      transition: "background-color 0.2s",
                    }}
                  >
                    Choose File
                  </label>
                </div>
              </Box>
              <Typography style={{width:"100%",textAlign:"center"}}>{dataFileName}</Typography>
            </DialogContent>
            <DialogActions
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Button
                onClick={() => setIsOpen(false)}
                color="error"
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                onClick={handleFileSubmit}
                color="secondary"
                variant="outlined"
                disabled={isLoading}
                startIcon={
                  isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null
                }
              >
                {isLoading ? "Uploading..." : "Upload File"}
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContent>
              <Typography>Please add a Youtube Link and Submit.</Typography>
              {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                  Error: {error}
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsOpen(false)} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
