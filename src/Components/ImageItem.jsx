import React from 'react';
import { BiImage } from 'react-icons/bi';

function ImageItem({ image, key, src, data_id }) {
    return (
        <div className="cursor-pointer col-span-6 md:col-span-3 lg:col-span-2 rounded-xl text-center bg-white border">
            {image ? (
                <img
                    key={key}
                    src={src}
                    data_id={data_id}
                    className='sortable-item cursor-pointer col-span-5 md:col-span-2 rounded-xl text-center bg-white'
                />
            ) : (
                <div className='flex flex-col py-[35%]'>
                    <BiImage className='mx-auto' />
                    <h3 className='text-lg font-semibold'>Add Images</h3>
                </div>
            )}
        </div>
    );
}

export default ImageItem;