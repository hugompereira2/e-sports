import '../styles/Home.scss';
import Carousel from "../components/Carousel";
import BoxDuo from "../components/BoxDuo";
import Logo from '../assets/logo.svg'

const Home = () => {

    return (
        <div id="Home">
            <img src={Logo} alt="Logo" />
            <h1>
                Seu <span>duo</span> está aqui.
            </h1>
            <Carousel />
            <BoxDuo />
        </div>
    )
}

export default Home;