import Hero from './components/Hero'
import Banner from './components/Banner'
import Feature from './components/Feature'
import './App.css'



function App() {
    return (
    <>      
        <Hero />
        {/* <div className='absolute z-[-2] h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
         rgba(120,119,198,0.3),rgba(255,255,255,0))]'> */}
        <div className='bg'>
            <Banner />
            <Feature />
        </div>
    </>
  )
}
export default App