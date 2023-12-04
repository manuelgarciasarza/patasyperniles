import style from "./descripcion.module.css";

function Descripcion() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>PATASYPERNILES.COM</h1>
        </div>

        <div className={style.info}>
          <div className={style.infoContent}>
            <p>
              <i>
                SOMOS UNA EMPRESA QUE SE DEDICA A BRINDARTE LO MEJOR DE LA
                GASTRONOMÍA GOURMET, OFRECIENDO UN SERVICIO PROFESIONAL Y
                ESPECIALIZADO. APORTAMOS DIFERENTES OPCIONES PARA QUE TU
                CELEBRACIÓN TENGA UN AMBIENTE HOGAREÑO Y TODOS TUS INVITADOS SE
                SIENTAN COMO EN UNA COMIDA FAMILIAR. NOS ESFORZAMOS POR LOGRAR
                QUE TU EVENTO, YA SEA UNA BODA, ANIVERSARIO, CUMPLEAÑOS O
                REUNIÓN, SE TRANSFORME EN UN MOMENTO MEMORABLE.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
