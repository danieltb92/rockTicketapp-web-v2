import Card from './Card'


const cards =[
    {
        id:1,
        title: 'Historia de Bandas',
        description: 'Descripción de los origenes y trayectoria de la banda cronologicamente y resaltando los logros mas relevantes a lo larago de su historia.'
    },
    {
        id:2,
        title: 'Principales Conciertos',
        description: 'Los principales conciertos en tu zona geografica seran expuestos en un banner principal en el feed de la aplicación, con la informacion correspondiente del evento como fecha, ubicación y disponibilidad de tickets.'
    },
    {
        id:3,
        title: 'Festivales',
        description: 'Cada festival de Rock en la zona esta promocionado y categorizado de acuerdo al genero especifico en está sección.'
    },
    {
        id:4,
        title: 'Facilidad',
        description: 'La aplicación posee un diseño que proporciona una usabilidad correcta a la hora que explorar, obtener y escoger los tickets.'
    }
]


function Feature () {
    return (
        <div className='flex flex-col gap-2 md:grid grid-cols-2 grid-rows-2 md:gap-32 mx-2 justify-center items-center w-full'>
           
            {
                cards.map ( ({id, title, description}) => (
                    <div className='flex justify-center items-center' key={id}>
                        <Card title={title} description={description}/>
                    </div>
                ))
            }                          
            
        </div> 
    )
}

export default Feature
