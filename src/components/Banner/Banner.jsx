import Revitalift from "../../assets/imgs/Revitalift.png";
import "./Banner.scss/";

function Banner() {
  return (
   <>
   <section className="banner">
      <img className="revita" src={Revitalift} alt="Foto de uma modelo propagando o novo produto revitalift" />
    </section>
    </>
  );
}

export default Banner;
