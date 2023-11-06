import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages, setSelectedImages } from '../Redux/reducers/GallerySlice.jsx';
import Header from '../Components/Header.jsx';
import Gallery from '../Components/Gallery.jsx';

const MainLayout = () => {

    const dispatch = useDispatch();
    const images = useSelector((state) => state.gallery.images);
    const selectedImages = useSelector((state) => state.gallery.selectedImages);

    return (
        <div>
            <div className='m-4 md:m-16 bg-[aliceblue] rounded-xl'>
                {/* Header Component */}
                <Header
                    ImageData={{ images, setImages: (data) => dispatch(setImages(data)), selectedImages, setSelectedImages: (selected) => dispatch(setSelectedImages(selected)) }}
                />
                <hr />
                {/* Gallery Component */}
                <Gallery
                    ImageData={{
                        images,
                        setImages: (data) => dispatch(setImages(data)),
                        selectedImages,
                        setSelectedImages: (selected) => dispatch(setSelectedImages(selected)),
                    }}
                />
            </div>
        </div>
    );
};

export default MainLayout;