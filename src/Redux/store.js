import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../Redux/reducers/GallerySlice.jsx";

// Configuring Store
const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export default store;
