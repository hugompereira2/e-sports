import '../styles/Carousel.scss'
import Card from "./Card"
import ArrowLeft from '../assets/arrow_left.svg'
import Lol from '../assets/image-1.png'
import Apex from '../assets/image-2.png'
import Cs from '../assets/image-3.png'
import Wow from '../assets/image-4.png'
import Dota from '../assets/image-5.png'
import Fornite from '../assets/image-6.png'
import { useRef } from 'react'

const data = [
    { name: 'League of Legends', img: Lol },
    { name: 'Apex', img: Apex },
    { name: 'Counter Strike', img: Cs },
    { name: 'World Of Warcraft', img: Wow },
    { name: 'Dota 2', img: Dota },
    { name: 'Fornite', img: Fornite },
    { name: 'Fornite', img: Fornite },
    { name: 'Fornite', img: Fornite },
]

const Carousel = () => {
    const refCard = useRef<HTMLDivElement>(null);

    const handleClick = (value : number) => {
        if (refCard && refCard.current) {
            refCard.current.scrollLeft += value;
        }
    }

    return (
        <div id="Carousel">
            <img className="arrow_left" onClick={() => handleClick(-180)} src={ArrowLeft} alt="arrow left" />
            <div ref={refCard} className="cards">
                {
                    data.map((game, index) => {
                        return <Card key={index} game={game} />
                    })
                }
            </div>
            <img className="arrow_right" onClick={() => handleClick(180)} src={ArrowLeft} alt="arrow right" />
        </div>
    )
}

export default Carousel