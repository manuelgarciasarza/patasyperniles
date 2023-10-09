import style from "./descripcion.module.css";
import foto from "../../img/descripcion.jpg";

function Descripcion() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>PATAS Y PERNILES</h1>

        <div className={style.info}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              porro officia autem,
              <br /> praesentium veritatis odio facilis asperiores maiores
              blanditiis hic? <br /> Fugiat, tempora? <br /> Cumque maxime
              itaque facilis atque perspiciatis veritatis et neque? <br />
              Laboriosam sapiente dolore ipsam ex cumque laudantium ipsa tempore
              cupiditate voluptatum earum, <br />
              vero inventore accusantium eligendi similique eos expedita quos
              velit? <br /> Nulla corporis tenetur in ducimus necessitatibus.
              Assumenda, eligendi.
            </p>
          </div>
          <img className={style.foto} src={foto} />
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
