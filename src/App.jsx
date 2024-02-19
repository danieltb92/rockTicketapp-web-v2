import Hero from './components/Hero'
import Banner from './components/Banner'
import Feature from './components/Feature'
import './App.css'



function App() {
    return (
    <main>      
        <Hero />
        <div className='bg'>
            <Banner />
            <Feature />
        </div>
    </main>
  )
}
export default App