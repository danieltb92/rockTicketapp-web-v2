import mockupApp from '../assets/images/image29.png'
import '../App.css'

 function Banner() {
  return (
    <section className='flex justify-center flex-col items-center'>
        <img className='w-3/6' src={mockupApp} alt="mockup app" />
        <p className='banner-p flex justify-center items-center text-center leading-5 max-w-2xl px-10'>
          RockTicket es una aplicación que le brinda al usuario todos los elementos necesarios para ir al concierto de Rock de su banda favorita.<br></br>
          Desde el anuncio del concierto hasta la entrada al concierto</p>
    </section>
  )
}


export default Banner