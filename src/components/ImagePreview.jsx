import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className='mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 w-full max-w-2xl gap-30 select-none'>
      <div className='h-fit bg-white shadow-lg rounded-lg overflow-hidden'>
        <h2 className='text-lg font-medium text-center bg-gray-700 text-white py-2 px-4'>Original Image</h2>

        {props.uploaded ?  <img src={props.uploaded} alt="" className='w-full object-cover'/>:
        <div className='h-60 bg-gray-300 flex justify-center items-center'>No Image Selected</div>
        }
       
        
      </div>

      <div className='h-fit bg-white shadow-lg rounded-lg overflow-hidden'>
        <h2 className='text-lg font-medium text-center bg-green-700 text-white py-2 px-4'>AI Genrated Image</h2>

        {
        props.loading ? <Loading/> :
        props.enhanced ? <img src={props.enhanced} alt="" className='w-full object-cover'/>:
        <div className='h-60 bg-gray-300 flex justify-center items-center'>No Enhanced Image</div>
        }
        
        
      </div>
    </div>
  )
}

export default ImagePreview
