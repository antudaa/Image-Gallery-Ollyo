import React from 'react';
import FeaturedImage from './Image/FeaturedImage';
import ImageItem from './Image/ImageItem';
import data from "../data.js";

const Gallery = () => {
    return (
        <div className="p-5 ">
            <div className="grid grid-cols-10 gap-4 grid-flow-row grid-">
                {data.map((image, index) => {
                    if (index === 0) {
                        return <FeaturedImage key={image?.id} image={image?.url} />;
                    } else {
                        return <ImageItem key={image?.id} image={image?.url} />;
                    }
                })}
                <ImageItem />
            </div>
        </div>
    );
};

export default Gallery;