import { SET_YOUTUBE_URL } from './types';

const initialState = {
  youtubeUrl: "",
};

const youtubeReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_YOUTUBE_URL:
      return {
        ...state,
        youtubeUrl: action.payload,
      };
    default:
      return state;
  }
};

export default youtubeReducer;
