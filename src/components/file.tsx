import React from "react";
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
  const { setRowData, setDataFileName, youtubeUrl, dataFileName } =
    useYoutubeContext();

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
    try {
      if (dataFileName) {
        const response = await API.post(`query_answer`, {
          url: youtubeUrl,
          pdf_file: dataFileName,
          model_type: "advanced",
        });
        let res = response.data;
        res = res.replace(/NaN/g, "0");
        const data = JSON.parse(res);
        setRowData(data);
        
        // Navigate to /ai-response after the response is successfully processed
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      router.push('/ai-response');

      setIsOpen(false); // Assuming this is to close a modal or similar
    }
  };

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
                Upload File
              </Button>
            </ModalFooter></>: 
             <div>First add Youtube Link  <Button
             color="danger"
             variant="light"
             onPress={() => setIsOpen(false)}
           >
             Cancel
           </Button></div>
           }
      
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
