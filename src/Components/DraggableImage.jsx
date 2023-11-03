import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Define the draggable item type
const ItemTypes = {
    IMAGE: 'image',
};

const DraggableImage = ({ image, index, moveImage, selectedImages, handleSelectImage }) => {
    const [, ref] = useDrag({
        type: ItemTypes.IMAGE,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.IMAGE,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveImage(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={(node) => ref(drop(node))}
            className={`sortable-item sortable-handle cursor-pointer bg-white rounded-xl ${index === 0
                ? 'row-start-1 col-start-1 col-span-12 md:col-span-6 lg:col-span-4 row-end-3'
                : 'col-span-6 md:col-span-3 lg:col-span-2'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <label className="image-checkbox relative">
                <input
                    type="checkbox"
                    className={`checkbox-input ${selectedImages.includes(image.id) || isHovered ? 'visible' : 'hidden'} absolute top-4 left-4 w-4 h-4`}
                    onChange={() => handleSelectImage(image.id)}
                    checked={selectedImages.includes(image.id)}
                />
                <img
                    src={image.url}
                    alt={`Image ${image.id}`}
                    className="image-preview rounded-xl"
                />
            </label>
        </div>
    );
};

export default DraggableImage;