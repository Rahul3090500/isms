// store/index.tsx
import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import youtubeReducer from './youtube/reducer';

export interface State {
  youtube: any;
}

// Root reducer with HYDRATE handling for Next.js server-side rendering
const rootReducer = combineReducers({
  youtube: youtubeReducer,
});

// Enhance the rootReducer for Next.js's HYDRATE action
const reducer = (state: State | undefined, action: any): State => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return rootReducer(state, action);
  }
};
const makeStore = () => createStore(
  reducer
);

export const wrapper = createWrapper(makeStore);
