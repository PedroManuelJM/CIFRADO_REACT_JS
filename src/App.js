import React from 'react';
import emailjs from 'emailjs-com';
import contacto from './assets/fondos/contacto.jpg';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faEnvelope,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

export default function App() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_x9fbfjp', 'contacto_template', e.target, 'user_br8cZDuAJYTfqNpU6xyrE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
      swal({
        title: `Mensaje enviado`,
        text: '',
        timer: 1500,
        icon: "success",
        timerProgressBar: true,
    })
  }

  return (
    <section id="contacto" className="container padded">
      <br></br>
      <form className="contact-form " onSubmit={sendEmail}>
        <div className="card mb-3">
          <div className="card-header bg-info text-white ">
            <h4>Contactenos</h4>
          </div>
          <div className="row no-gutters">

            <div className="col-md-4">
              <img src={contacto} class="card-img" alt="..." />
            </div>
            <div className="col-md-3">

              <div class="card-body">
                <h5 class="card-title">Pronto nos pondremos en contacto con usted .</h5>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text"><FontAwesomeIcon className="fa-icon" icon={faUserCircle}  /></div>
                  </div>
                  <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ingrese su Nombre" name="name"
                   required/>
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text"><FontAwesomeIcon className="fa-icon" icon={faEnvelope}  /></div>
                  </div>
                  <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="Ingrese su correo" name="email"
                  required/>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Asunto" name="subject" required/>
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text"><FontAwesomeIcon className="fa-icon" icon={faPhoneAlt}  /></div>
                  </div>
                  <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ingrese su teléfono " name="phone"
                  required/>
                </div>
                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1" name="distrito" required>
                    <option selected>Seleccione su distrito </option>
                    <option value="Ate">Ate</option>
                    <option value="San juan Lurigancho">San juan Lurigancho</option>
                    <option value="Rimac">Rimac</option>
                    <option value="Miraflores">Miraflores</option>
                    <option value="San Isidro">San Isidro</option>
                    <option value="Ventanilla">Ventanilla</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <br></br>
                <br></br>
                <textarea class="form-control" placeholder="Escriba su mensaje o comentario" rows="8" name="mensaje" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-sm">
                <span role="status" aria-hidden="true"></span>
                 Enviar mensaje</button>
            </div>
          </div>
          <br></br>
        </div>
      </form>
    </section>
  );
}
