import React from 'react';
import { handleDeleteSelectedImages } from './Functions/Function';

const DeleteButton = ({ ImageData }) => {
    const { images, setImages, selectedImages, setSelectedImages } = ImageData;

    // Calling Function To Delete Image .
    const deleteSelectedImages = () => {
        handleDeleteSelectedImages(images, setSelectedImages, setImages, selectedImages);
    };

    return (
        <div className='mb-3'>
            <button onClick={deleteSelectedImages} type="button" className="text-red-700 hover:text-white hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 border border-red-500">
                Delete File
            </button>
        </div>
    );
};

export default DeleteButton;