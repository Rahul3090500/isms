import React from 'react';

interface YTURLInputProps {
  onChange: any;
  onClear?: () => void;
  youtubeUrl: string;
}

const YTURLInput: React.FC<YTURLInputProps> = ({ onChange, youtubeUrl }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        disabled
        value={youtubeUrl}
        placeholder="Paste YouTube video URL here"
        onChange={onChange}
        aria-label="YouTube URL"
        className="w-full p-3 text-base text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
 
    </div>
  );
};

export default YTURLInput;
