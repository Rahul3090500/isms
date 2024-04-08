import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useYoutubeContext } from "@/hooks/urlcontext";
import API from "@/utils/api.config";
import { useRouter } from "next/router";

export default function FileInputModal({ IsOpen, setIsOpen,videoSummary }: any) {
  const {  setDataFileName, youtubeUrl, dataFileName } =
    useYoutubeContext();
    const [rowData, setRowData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //@ts-ignore
    const file = e.target.files[0];

    const formData = new FormData();
    //@ts-ignore
    formData.append("filename", file);

    try {
      const response = await fetch(
        `http://20.244.47.51:8080/v1/upload_file?url=${youtubeUrl}`,
        {
          method: "POST",
          body: formData,
        }
      );
      response;
      setDataFileName(file?.name);
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error
    }
  };
  const router = useRouter(); // Use the useRouter hook to get access to the router object
  const handleFileSubmit = async () => {
    if (!dataFileName || !youtubeUrl) {
      console.log("No file selected or YouTube URL missing.");
      return; // Exit if no file is selected or if the YouTube URL is missing
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://20.244.47.51:8080/v1/query_answer', {
        method: 'POST',
        body: JSON.stringify({
          url: youtubeUrl,
          pdf_file: dataFileName,
          model_type: "advanced",
        }),
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as required, such as Authorization for Bearer tokens
        },
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const res = await response.text(); // Use .text() first to handle non-JSON responses
      const processedResponse = res.replace(/NaN/g, "0");

      const data = JSON.parse(processedResponse);
      setRowData(data); // Update global state with the parsed data

      console.log("Data successfully fetched and processed", data);
    } catch (error:any) {
      console.error("Error during file submission:", error);
      setError(error.message || 'An unknown error occurred');
    } finally {
      setIsLoading(false);
      setIsOpen(false); // Close the modal
      router.push('/ai-response'); // Navigate after actions are complete
    }
  };

  console.log(rowData,"rowDataaaaaa")
  
  return (
    <>
      <Modal isOpen={IsOpen}>
        <ModalContent>
          <>
          {videoSummary ? <>      <ModalHeader className="flex flex-col gap-1">
              Upload Your File
            </ModalHeader>
            <ModalBody>
              <input type="file" onChange={handleFileChange} />
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                variant="light"
                onPress={handleFileSubmit}
              >
            {isLoading ? 'Uploading...' : 'Upload File'}
              </Button>
            </ModalFooter></>: 
             <div>First add Youtube Link  <Button
             color="danger"
             variant="light"
             onPress={() => setIsOpen(false)}
           >
             Cancel
           </Button>
           {error && <p>Error: {error}</p>}
</div>
           
           }
      
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
