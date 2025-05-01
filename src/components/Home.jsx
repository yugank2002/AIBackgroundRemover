import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhancedImageAPI'

const Home = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadImageHandler = async (file) =>{
    
    setuploadImage(URL.createObjectURL(file));
    setloading(true);
    //call API

    try {
      const response = await enhancedImageAPI(file);
      setenhancedImage(response);
      setloading(false);
    } catch (error) {
      console.error(error);
      alert("Error Loading Enhanced Image! Please try again later.")
      
    }
     
  }
  return (
    <>
      <ImageUpload
        uploadImageHandler={uploadImageHandler}
      />
      
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  )
}

export default Home
