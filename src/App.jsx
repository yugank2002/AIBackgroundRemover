
import './App.css'
import Home from './components/Home'

function App() {
  

  return (
    
     <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4'>
      <div className='text-center mb-8 select-none'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>AI Image Backgorund Remover</h1>
        <p className='text-lg text-gray-600'>Upload your Image and let AI do it for you</p>
        
      </div>
      <Home />
      <div className=' text-gray-600 flex flex-col justify-center items-center'>
        <p>Developed by <a className='text-blue-600' href="https://www.linkedin.com/in/yugankprajapati" 
        target='_blank'>@yugankprajapati</a></p>
      </div>
     </div>
   
  )
}

export default App
