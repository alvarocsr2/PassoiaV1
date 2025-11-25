import "./News.scss"
import {Banner2} from "../../assets/imgs" 

function News() {
    return (
        <>
            <section className="News-container">
                <h2>NOVIDADES PARA VOCÊ</h2>
                <img src={Banner2} alt="imagem de maquiagens espalhadas" />
            </section>
        </>
    )
}

export default News;