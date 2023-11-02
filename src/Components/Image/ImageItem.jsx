import React from 'react';
import { BiImage } from 'react-icons/bi';

function ImageItem({ image }) {
    return (
        image ? (
            <div className="cursor-pointer col-span-5 md:col-span-2 rounded-xl text-center bg-white">
                <img className='rounded-xl border-gray-300 border-[1px]' src={image} alt="" />
            </div>
        ) : (
            <div className="cursor-pointer col-span-5 md:col-span-2 rounded-xl text-center bg-white">
                <div className='flex flex-col py-[35%]'>
                    <BiImage className='mx-auto' />
                    <h3 className='text-lg font-semibold'>Add Images</h3>
                </div>
            </div>
        )
    );
}

export default ImageItem;