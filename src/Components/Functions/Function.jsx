export const handleDeleteSelectedImages = (images, setSelectedImages, setImages, selectedImages) => {
    const updatedImages = images.filter((image) => !selectedImages.includes(image.id));
    setImages(updatedImages);
    setSelectedImages([]);
};