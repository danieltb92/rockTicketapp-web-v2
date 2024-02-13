import logo from '../assets/images/RockTicket_Logo.png';
import googlePlay from '../assets/images/1.png';
import appStore from '../assets/images/2.png';
import '../css/hero.css';



function Header() {

    return (
        <div className="hero flex justify-center flex-col items-center">
            <img className="w-50" src={logo} alt="Logo RockTicket" />
            <h1 className="text-7xl text-center tracking-wide leading-90 pt-16 pb-3"> Dejate contagiar <br></br>por el
              <span className="text-sky-300"> Rock.</span>
            </h1>
            <h4 className="hero-h4 text-lg leading-5 text-center tracking-wide m-4">
                La App que te lleva a los mejores conciertos de rock en tu ciudad.<br></br>
                Descarga la app  y dejate contagiar de la energia del rock.</h4>
            <section className="flex justify-center m-6 gap-3">
                <a href="https://play.google.com/" target="_blank" rel="noopener">
                    <img className="h-10" src={googlePlay} alt="boton google play" />
                </a>
                <a href="https://www.apple.com/co/app-store/" target="_blank" rel="noopener">
                    <img className="h-10 " src={appStore} alt="boton app store" />
                </a>
            </section>
        </div>
    )
}

export default Header