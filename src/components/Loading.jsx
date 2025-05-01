import { GridLoader } from "react-spinners"; 

const Loading = () => {
  return (
    <div className='h-60 bg-gray-300 flex justify-center items-center'>
         <GridLoader size={10} color="green" />
    </div>
    
  )
}

export default Loading