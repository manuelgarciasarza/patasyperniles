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
              SOMOS UNA EMPRESA QUE SE DEDICA A BRINDARTE LO MEJOR DE LA
              GASTRONOMIA GOURMET. OFRECIENDO UN SERVICIO PROFESIONAL Y
              ESPECIALIZADO. APORTANDO DIFERENTES OPCIONES PARA QUE TU
              CELEBRACION TENGA UN AMBIENTE HOGAREÑO Y TODOS TUS INVITADOS SE
              SIENTAN COMO EN UNA COMIDA FAMILIAR, Y LOGRAR QUE TU EVENTO COMO
              BODAS, ANIVERSARIOS, CUMPLEAÑOS Y REUNIONES SE TRANSFORMEN EN UN
              MOMENTO MEMORABLE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
