import Hero from './components/Hero'
import Banner from './components/Banner'
import Feature from './components/Feature'
import './App.css'
import './index.css'
import Footer from './components/Footer'



function App() {
    return (
    <main className='items-center'>      
        <Hero />
        <div className='bg items-center'>
            <Banner />
            <Feature />
            <Footer />
        </div>
    </main>
  )
}
export default App