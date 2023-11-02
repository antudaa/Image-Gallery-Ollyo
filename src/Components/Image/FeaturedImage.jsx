import React from 'react';

function FeaturedImage({ image }) {
    return (
        <div className="cursor-pointer rounded-xl text-center bg-white row-start-1 col-start-1 md:col-span-4 row-end-3 col-span-10">
            <img className='rounded-xl border-gray-300 border-[1px]' src={image} alt="" />
        </div>
    );
}

export default FeaturedImage;