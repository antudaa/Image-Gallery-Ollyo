import React, { useState } from 'react';
import './index.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import data from "./data.js"

function App() {

  // Storing Image Data
  const [images, setImages] = useState(data.slice());
  // Storing Selected Images Data
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <div className='min-h-screen'>
      <div className='m-4 md:m-16 bg-[aliceblue] rounded-xl'>
        {/* Header Component */}
        <Header ImageData={{ images, setImages, selectedImages, setSelectedImages }} />
        <hr />
        {/* Image Gallery */}
        <Gallery ImageData={{ images, setImages, selectedImages, setSelectedImages }} />
      </div>
    </div>
  )
}

export default App
