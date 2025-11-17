import "./Header.scss/"
import Logomarca from "../../assets/Imgs/Logomarca.png"

function Header(){
  return (
   <header>
    <img src={Logomarca} alt="Foto da logo do site" />

    <ul>
    <li>LOOKS</li>
    <li>LANÇAMENTOS</li>
    <li>NOVIDADES</li>
    </ul>
    
   </header>
  )
}

export default Header
