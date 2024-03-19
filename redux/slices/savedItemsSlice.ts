import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SavedItemsState {
  posts: any[];
  items: number[];
}

const initialState: SavedItemsState = {
  items: [],
  posts: [],
};

const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<number>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((id) => id !== action.payload);
    },
    savePost(state, action: PayloadAction<any>) {
      const existingPost = state.posts.find(post => post.id === action.payload.id);
      if (!existingPost) {
        state.posts.push(action.payload);
      }
    },
    unsavePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const { addItem, removeItem, savePost, unsavePost } = savedItemsSlice.actions; 
export default savedItemsSlice.reducer;
