import initialImageList from '../../data';
import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
    name: 'gallery',
    // Initializing the initial Value.
    initialState: {
        images: initialImageList,
        selectedImages: [],
    },
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;
        },
        setSelectedImages: (state, action) => {
            state.selectedImages = action.payload;
        },
        deleteSelectedImages: (state) => {
            state.images = state.images.filter((image) => !state.selectedImages.includes(image.id));
            state.selectedImages = [];
        },
    },
});

// Exporting All necessary Things . 
export const { setImages, setSelectedImages, deleteSelectedImages } = gallerySlice.actions;

export const selectImages = (state) => state.gallery.images;
export const selectSelectedImages = (state) => state.gallery.selectedImages;

export default gallerySlice.reducer;