import React from 'react';
import DeleteButton from './DeleteButton';

const Header = ({ ImageData }) => {
    const { images, setImages, selectedImages, setSelectedImages } = ImageData;

    // Graving info of selected images.
    const selectedImagesInfo = images.filter((image) => selectedImages.includes(image.id));

    return (
        <header className='h-14 px-8 py-2 flex justify-between gap-8'>
            <nav className='text-xl font-semibold text-gray-700'>
                {
                    selectedImagesInfo.length > 0 ? <p className='text-sm md:text-xl font-semibold text-gray-700 whitespace-nowrap'>
                        {selectedImagesInfo.length} Files Selected
                    </p> : "Gallery"
                }
            </nav>
            {/* Delete Button */}
            <nav>
                {
                    selectedImagesInfo.length > 0 ?
                        <DeleteButton ImageData={{ images, setImages, selectedImages, setSelectedImages }} /> : ""
                }
            </nav>
        </header>
    );
};

export default Header;