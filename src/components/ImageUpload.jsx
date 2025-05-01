import React from 'react'

const ImageUpload = (props) => {
  const ImageHandler = (e) => {
    const file = e.target.files[0];
    if(file){
      props.uploadImageHandler(file);
    }
  };
  return (
    <div className='bg-white shadow-lg rounded-2xl width-full px-5 py-3 max-w-2xl'>
      <label htmlFor="fileInput"
      className='block width-full cursor-pointer border-3 border-dashed border-gray-600 rounded-lg p-4 text-center
      hover:border-blue-600 transition-all group'>
      
      <input type="file" id='fileInput' className='hidden' onChange={ImageHandler}/>
      <span className='text-lg font-medium text-gray-600 group-hover:text-blue-600 transition-colors '>
        Click Or Drag to Upload File</span>

      </label>
    </div>
  )
}

export default ImageUpload
