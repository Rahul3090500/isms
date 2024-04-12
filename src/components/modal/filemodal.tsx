import React, {useState } from "react";
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

export default function FileModal({ isOpen, setIsOpen, videoSummary }: any) {
  const { setCredentails,setUploadedFileName,uploadedFileName } = useYoutubeContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setIsLoading(true);
    setError("");
    setUploadedFileName("");

    reader.onload = (event) => {
      try {
        //@ts-ignore
        const jsonData = JSON.parse(event.target.result as string);
        setCredentails(jsonData?.installed);
        setUploadedFileName(file.name);
        toast.success(`File "${file.name}" uploaded successfully!`);
        setIsOpen(false)
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
