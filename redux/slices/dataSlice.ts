import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { fetchPhotos, fetchPosts } from '../../util/api';

interface DataState {
  photos: any[];
  posts: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  photos: [],
  posts: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchPhotosStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPhotosSuccess(state, action: PayloadAction<any[]>) {
      state.photos = action.payload;
      state.loading = false;
    },
    fetchPhotosFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<any[]>) {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} = dataSlice.actions;

export default dataSlice.reducer;

export const fetchPhotosData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchPhotosStart());
    const photos = await fetchPhotos();
    dispatch(fetchPhotosSuccess(photos));
  } catch (error: any) { 
    dispatch(fetchPhotosFailure(error.message || 'Failed to fetch photos'));
  }
};

export const fetchPostsData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    const posts = await fetchPosts();
    dispatch(fetchPostsSuccess(posts));
  } catch (error: any) { 
    dispatch(fetchPostsFailure(error.message || 'Failed to fetch posts'));
  }
};
