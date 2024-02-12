import logo from '../assets/images/RockTicket_Logo.png';
import googlePlay from '../assets/images/1.png';
import appStore from '../assets/images/2.png';

function Header() {

    return (
        <div>
            <img src={logo} alt="Logo RockTicket" />
            <h1> Dejate contagiar <br></br>por el
              <span > Rock.</span>
            </h1>
            <h4>La App que te lleva a los mejores conciertos de rock en tu ciudad.<br></br>
                Descarga la app  y dejate contagiar de la energia del rock.</h4>
            <section>
                <a href="">
                    <img src={googlePlay} alt="boton google play" />
                </a>
                <a href="">
                    <img src={appStore} alt="boton app store" />
                </a>
            </section>
        </div>
    )
}

export default Header