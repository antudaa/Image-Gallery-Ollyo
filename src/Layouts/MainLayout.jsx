import React, { useState } from 'react';
import data from "../data.js";
import Header from '../Components/Header.jsx';
import Gallery from '../Components/Gallery.jsx';

const MainLayout = () => {

    // Storing Image Data
    const [images, setImages] = useState(data.slice());
    // Storing Selected Images Data
    const [selectedImages, setSelectedImages] = useState([]);

    return (
        <div>
            <div className='m-4 md:m-16 bg-[aliceblue] rounded-xl'>
                {/* Header Component */}
                <Header ImageData={{ images, setImages, selectedImages, setSelectedImages }} />
                <hr />
                {/* Image Gallery */}
                <Gallery ImageData={{ images, setImages, selectedImages, setSelectedImages }} />

            </div>
        </div>
    );
};

export default MainLayout;