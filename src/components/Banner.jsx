import mockupApp from '../assets/images/image29.png'
import '../App.css'

 function Banner() {
  return (
    <section className='flex justify-center flex-col items-center max-w-screen-xl my-10'>
        <img className='w-4/5  md:w-1/2' src={mockupApp} alt="mockup app" />
        <p className='banner-p flex justify-center items-center text-center leading-5 tracking-[1.6px] max-w-2xl px-7'>
          RockTicket es una aplicación que le brinda al usuario todos los elementos necesarios para ir al concierto de Rock de su banda favorita.<br></br>
          Desde el anuncio del concierto hasta la entrada al concierto</p>
    </section>
  )
}


export default Banner