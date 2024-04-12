import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useYoutubeContext } from "@/hooks/urlcontext";
import axios from "axios";

export default function FileModal({ isOpen, setIsOpen, videoSummary }: any) {
  const { rowData, youtubeUrl, setCredentails, Credentails } =
    useYoutubeContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");

  useEffect(() => {
    const auth = async () => {
      const data = rowData.filter((it: any) => it.selected === true);
      const payload = data.map((it: any) => ({
        answer: it?.Response,
        commentId: it?.commentId,
      }));
      //@ts-ignore

      if (rowData.length > 0 && Credentails?.client_secret) {
        try {
          //@ts-ignore

          const response = await axios.post("/api/get-auth-url", {
            //@ts-ignore

            client_id: Credentails?.client_id,
            //@ts-ignore

            client_secret: Credentails?.client_secret,
            redirect_uris: ["http://localhost:3000/"], // Update with your redirect URIs
          });
          localStorage.setItem("Response", JSON.stringify(rowData));
          localStorage.setItem(
            "data",
            JSON.stringify({
              payload: payload,
              //@ts-ignore

              client_id: Credentails?.client_id,
              //@ts-ignore

              client_secret: Credentails?.client_secret,
              redirect_uris: ["http://localhost:3000/"],
              youtubeUrl: youtubeUrl,
            })
          );
          const authUrl = response.data.authUrl;
          window.location.href = authUrl;
        } catch (error) {
          console.error("Error uploading file:", error);
          setError("Failed to upload file.");
          toast.error("Failed to upload file.");
        }
      }
    };

    auth();
  }, [Credentails, rowData, youtubeUrl]);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setIsLoading(true);
    setError("");
    setUploadedFileName("");

    reader.onload = (event) => {
      try {
        //@ts-ignore
        const jsonData = JSON.parse(event.target.result);
        setCredentails(jsonData?.installed);
        setUploadedFileName(file.name);
        toast.success(`File "${file.name}" uploaded successfully!`);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setError("Error parsing JSON.");
        toast.error("Error parsing JSON.");
      } finally {
        setIsLoading(false);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        {!videoSummary ? (
          <>
            <DialogTitle
              id="responsive-dialog-title"
              sx={{ fontWeight: "bold", textAlign: "center", width: "500px" }}
            >
              To unlock AI response, Kindly add YouTube URL, Credential File and
              Information File.
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
                    onChange={handleFileUpload}
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
              <Typography style={{ width: "100%", textAlign: "center" }}>
                {uploadedFileName}
              </Typography>
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
                onClick={handleFileUpload}
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
