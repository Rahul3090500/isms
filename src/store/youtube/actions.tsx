import { SET_YOUTUBE_URL } from './types';

export const setYoutubeUrl = (url:any) => ({
  type: SET_YOUTUBE_URL,
  payload: url,
});
