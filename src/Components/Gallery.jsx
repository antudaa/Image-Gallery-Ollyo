import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableImage from './DraggableImage.jsx';
import ImageItem from './ImageItem';

const Gallery = ({ ImageData }) => {
    
    const { images, setImages, selectedImages, setSelectedImages } = ImageData;

    const moveImage = (fromIndex, toIndex) => {
        const updatedImages = [...images];
        const [movedImage] = updatedImages.splice(fromIndex, 1);
        updatedImages.splice(toIndex, 0, movedImage);
        setImages(updatedImages);
    };

    const handleSelectImage = (imageId) => {
        if (selectedImages.includes(imageId)) {
            setSelectedImages(selectedImages.filter((id) => id !== imageId));
        } else {
            setSelectedImages([...selectedImages, imageId]);
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-5">
                <div className="slider-organizer grid grid-cols-12 lg:grid-cols-10 gap-6">
                    {images.map((image, i) => (
                        <DraggableImage
                            key={image.id}
                            image={image}
                            index={i}
                            moveImage={moveImage}
                            selectedImages={selectedImages}
                            handleSelectImage={handleSelectImage}

                        />
                    ))}
                    <ImageItem />
                </div>
            </div>
        </DndProvider>
    );
};

export default Gallery;
