import style from "./contactHome.module.css";

function ContactHome() {
  return (
    <div>
       <form ref={form} onSubmit={sendEmail}> 
      <div className={style.title}>
        <h2>Contactanos</h2>
      </div>
      <div className={style.content}>
        <form className={style.form}>
          <input className={style.nombre} placeholder="Nombre" type="text" />
          <input className={style.email} placeholder="Email" type="email" />
          <textarea className={style.text} placeholder="Mensaje"></textarea>
        </form>
      </div>
      </form>
    </div>
  );
}

export default ContactHome;
