import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSelectedImages } from '../Redux/reducers/GallerySlice.jsx';

const DeleteButton = () => {
    const dispatch = useDispatch();

    // Function To Delete Image 
    const deleteSelectedImagesFromState = () => {
        dispatch(deleteSelectedImages());
    };

    return (
        <div className='mb-3'>
            <button
                onClick={deleteSelectedImagesFromState}
                type='button'
                className='text-red-700 hover:text-white hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 border border-red-500 whitespace-nowrap'
            >
                Delete File
            </button>
        </div>
    );
};

export default DeleteButton;