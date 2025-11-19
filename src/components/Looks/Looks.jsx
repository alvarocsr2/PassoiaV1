import "./Looks.scss"
import  {Labios,Olhos,Rosto,Tendencia} from "../../assets/imgs";

function Looks(){
  return (
    <section className="section_looks">
        <div className='looks_titulo'>
        <h2>LOOKS E DICAS DE MAQUIAGEM </h2>
        </div>
        
        <div className="foto_container">
            <img src={Labios} alt="" />
            <img src={Olhos} alt="" />
            <img src={Rosto} alt="" />
            <img src={Tendencia} alt="" />
        </div>
    </section>
  )
}

export default Looks