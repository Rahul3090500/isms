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
}

const YoutubeContext = createContext<YoutubeContextType | undefined>(undefined);

export const YoutubeContextProvider = ({ children }: { children: ReactNode }) => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>(() => {
    // Check if it's a new session to potentially clear data
    if (typeof window !== 'undefined') {
      const isNewSession = !sessionStorage.getItem('isNewSession');
      sessionStorage.setItem('isNewSession', 'false');
      if (isNewSession) {
        localStorage.removeItem('youtubeUrl'); // Clear specific local storage data when new tab opens
      }
      return localStorage.getItem('youtubeUrl') || '';
    }
    return '';
  });

  const [dataFileName, setDataFileName] = useState('');
  const [tokenFileName, setTokenFileName] = useState('');
  const [rowData, setRowData] = useState<any[]>([]);
  const [responseRowData, setResponseRowData] = useState<any>(false);
  const [Credentails, setCredentails] = useState<Object>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (youtubeUrl === '') {
        localStorage.removeItem('youtubeUrl'); // Clear when youtubeUrl is empty
      } else {
        localStorage.setItem('youtubeUrl', youtubeUrl);
      }
    }
  }, [youtubeUrl]);

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