import React, { useState, useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import data from '../data';
import ImageItem from './ImageItem';
import ImageSelector from './ImageSelector';

const Gallery = () => {
    const sliderOrganizerRef = useRef(null);
    const [images, setImages] = useState(data.slice());

    const handleDeleteImages = (imageIds) => {
        const updatedImages = images.filter((image) => !imageIds.includes(image.id));
        setImages(updatedImages);
    };

    useEffect(() => {
        const sliderOrganizer = sliderOrganizerRef.current;

        new Sortable(sliderOrganizer, {
            animation: 300,
            draggable: '.sortable-item',
            handle: '.sortable-handle',
            onStart: function (evt) {
                handleDragStart(evt);
            },
            onEnd: function (evt) {
                handleDrop(evt);
            },
        });

        function handleDragStart(evt) {
            evt.fromIndex = evt.oldIndex;
            console.log(`Dragging image from index ${evt.fromIndex}`);
        }

        function handleDrop(evt) {
            const oldIndex = evt.oldIndex;
            const newIndex = evt.newIndex;

            const [movedImage] = images.splice(oldIndex, 1);
            images.splice(newIndex, 0, movedImage);

            console.log(`Image moved from index ${oldIndex} to index ${newIndex}`);

            setImages([...images]);
        }
    }, [images]);
    

    return (
        <div className="p-5">
            <div ref={sliderOrganizerRef} className="slider-organizer grid grid-cols-10 gap-6">
                {images.map((image, i) => (
                    <img
                        key={image.id}
                        src={image.url}
                        data_id={image.id}
                        className={`sortable-item sortable-handle cursor-pointer rounded-xl text-center bg-white hover:opacity-60 ${i === 0
                                ? 'row-start-1 col-start-1 md:col-span-4 row-end-3 col-span-10'
                                : 'col-span-5 md:col-span-2'
                            }`
                        }
                    />
                ))}
                <ImageItem />
            </div>
        </div>
    );
};

export default Gallery;