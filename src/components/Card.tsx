import '../styles/Card.scss';

type gameProps = {
    name: string,
    img: string
}

interface CardProps {
    game: gameProps
}

const Card = ({game}: CardProps) => {
    return (
        <div id="Card">
            <img src={game.img} alt={game.name} />
            <div className="card_info">
                <h2>{game.name}</h2>
                <span>4 anúncios</span>
            </div>
        </div>
    )
}

export default Card