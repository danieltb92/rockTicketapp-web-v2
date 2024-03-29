import logo from '../assets/logo-rockticket.svg';
import googlePlay from '../assets/images/1.png';
import appStore from '../assets/images/2.png';
import lights from '../assets/images/lights.svg';
import '../css/hero.css';



function Hero() {

    return (
        <>  
            <div className=' hero z-0 top-0 flex justify-center'></div>
            <div className=" z-10 top-0 absolute w-screen h-screen flex justify-center flex-col items-center">
                <img className='absolute z-50 top-0' src={lights} alt="" />
                <img className="z-10 w-48" src={logo} alt="Logo RockTicket" />
                <h1 className="z-10 text-6xl text-center tracking-wide leading-[90%] lg:leading-[80%] md:leading-[80%] pt-16 pb-2 mx-10 lg:text-8xl md:text-7xl"> Dejate contagiar <br></br>por el
                    <span className="text-sky-300"> Rock.</span>
                </h1>
                <h4 className="z-10 font-roboto hero-h4 hero-h4-lg text-xs leading-5 text-center tracking-[1.6px] mb-10 mx-2 mt-3">
                    La App que te lleva a los mejores conciertos de rock en tu ciudad.<br></br>
                    Descarga la app  y dejate contagiar de la energia del rock.</h4>
                <section className="z-10 flex justify-center m-6 gap-3">
                    <a href="https://play.google.com/" target="_blank" rel="noopener">
                        <img className="h-10 hover:invert" src={googlePlay} alt="boton google play" />
                    </a>
                    <a href="https://www.apple.com/co/app-store/" target="_blank" rel="noopener">
                        <img className="h-10 hover:invert" src={appStore} alt="boton app store" />
                    </a>
                </section>
            </div>
        </>
    )
}

export default Hero