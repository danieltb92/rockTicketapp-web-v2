import gif from '../assets/images/Animationapp33333.gif'
import Cards from './Cards'

function Feature () {
    return (
        <div className='flex justify-center items-center w-full h-3/4 py-48 m-0 max-w-screen-xl'>
            <div className=' flex justify-center py-10 px-5 bg-gif rounded-3xl z-0 absolute'>
                <img className='flex m-0 ' src={gif} alt="GIF Prototipo"/>    
            </div>
            <div className=' flex justify-center items-center z-10 m-0 w-full'>
                <Cards/>
            </div>
        </div> 
    )
}

export default Feature