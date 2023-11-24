import emailjs from 'emailjs-com';
import React, { useState, useRef } from 'react';
import style from "./contact.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

  function Contact() {
    const form = useRef();
    const [errors, setErrors] = useState({
      nombre: '',
      asunto: '',
      email: '',
      mensaje: '',
    });
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      const name = form.current['nombre'].value;
      const subject = form.current['asunto'].value;
      const email = form.current['email'].value;
      const message = form.current['message'].value;
      const nameRegex = /^[a-zA-Z\s]*$/; 
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  
      let newErrors = {
        nombre: '',
        asunto: '',
        email: '',
        mensaje: '',
      };
  
      if (!name) {
        newErrors.nombre = 'Por favor, ingresa tu nombre.';
      } else if (!nameRegex.test(name)) {
        newErrors.nombre = 'El nombre solo puede contener letras y espacios.';
      }
  
      if (!subject) {
        newErrors.asunto = 'Por favor, ingresa un asunto.';
      }
  
      if (!email) {
        newErrors.email = 'Por favor, ingresa tu correo electrónico.';
      } else if (!emailRegex.test(email)) {
        newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
      }
  
      if (!message) {
        newErrors.mensaje = 'Por favor, ingresa un mensaje.';
      } else if (message.length < 3 || message.length > 2000) {
        newErrors.mensaje = 'El mensaje debe tener entre 3 y 2000 caracteres.';
      }
  
      setErrors(newErrors);
  
      const hasErrors = Object.values(newErrors).some((error) => error !== '');
      if (!hasErrors) {
        emailjs.sendForm('service_m8d7xjb', 'template_t30hs87', form.current, 'ZNatgk5c_gNL_YC0o')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito.");
      }, (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje.");
        });

        setErrors({ nombre: '', asunto: '', email: '', mensaje: '' });
      }
    };

  return (
    <div>
      <Header />
      <div>
        <div className={style.title}>
          <h2>Contactanos</h2>
        </div>
        <div className={style.content}>
          <form ref={form} className={style.form} onSubmit={sendEmail}>
            <input className={style.nombre} name="nombre" placeholder="Nombre" type="text" />
            {errors.nombre && <p className={style.error}>{errors.nombre}</p>}
            <input className={style.nombre} name="asunto" placeholder="Asunto" type="text" />
            {errors.asunto && <p className={style.error}>{errors.asunto}</p>}
            <input className={style.email} name="email" placeholder="Email" type="email" />
            {errors.email && <p className={style.error}>{errors.email}</p>}
            <textarea className={style.text} name="message" placeholder="Mensaje"></textarea>
            {errors.mensaje && <p className={style.error}>{errors.mensaje}</p>}
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;