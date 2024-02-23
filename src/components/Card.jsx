import { PropTypes } from 'prop-types'
import '../css/card.css'

function Card({title, description}) {
  return (
    <section className="flex justify-center items-start gap-4 flex-col min-w-52 max-w-80 h-auto bg-zinc-900 p-8 rounded-xl">
        <span className="material-symbols-outlined mx-auto">mobile_friendly</span>
        <h2 className='card-title'>{title}</h2>
        <p className='card-p'>{description}</p>
    </section>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default Card;