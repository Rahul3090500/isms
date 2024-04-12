import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface YoutubeContextType {
  youtubeUrl: string;
  setYoutubeUrl: any;
  dataFileName: string;
  setDataFileName: any;
  tokenFileName: string;
  setTokenFileName: any;
  rowData: any; // Change 'any' to the type of your row data if known
  setRowData:any; // Change 'any' to the type of your row data if known
  Credentails: Object;
  setCredentails: any;
  responseRowData:any;
  setResponseRowData:any;
  uploadedFileName:any;
  setUploadedFileName:any;
}



const YoutubeContext = createContext<YoutubeContextType | undefined>(undefined);

// Helper function to get local storage item safely
const safeGetLocalStorage = (key: string): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) || '';
  }
  return '';
};

export const YoutubeContextProvider = ({ children }: { children: ReactNode }) => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>(() => safeGetLocalStorage('youtubeUrl'));
  const [dataFileName, setDataFileName] = useState<string>(() => safeGetLocalStorage('dataFileName'));
  const [uploadedFileName, setUploadedFileName] = useState<string>(() => safeGetLocalStorage('uploadedFileName'));
  const [tokenFileName, setTokenFileName] = useState<string>('');
  const [rowData, setRowData] = useState<any[]>([]);
  const [responseRowData, setResponseRowData] = useState<any>(false);
  const [Credentails, setCredentails] = useState<Record<string, any>>({});

  useEffect(() => {
    const handleStorage = (key: string, value: string) => {
      if (typeof window !== 'undefined') {
        if (value === '') {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, value);
        }
      }
    };

    handleStorage('youtubeUrl', youtubeUrl);
    handleStorage('dataFileName', dataFileName);
    handleStorage('uploadedFileName', uploadedFileName);
  }, [youtubeUrl, dataFileName, uploadedFileName]);

  return (
    <YoutubeContext.Provider
      value={{
        youtubeUrl,
        setYoutubeUrl,
        dataFileName,
        setDataFileName,
        tokenFileName,
        setTokenFileName,
        rowData,
        setRowData,
        Credentails,
        setCredentails,
        responseRowData,
        setResponseRowData,
        uploadedFileName,
        setUploadedFileName
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

export const useYoutubeContext = (): YoutubeContextType => {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error('useYoutubeContext must be used within a YoutubeContextProvider');
  }
  return context;
};