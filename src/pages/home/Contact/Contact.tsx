import emailjs from "@emailjs/browser";
import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./contact.scss";

const Contact = () => {
  const MySwal = withReactContent(Swal);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Utilisation de useCallback pour éviter les recréations inutiles de la fonction
  const sendEmail = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!formRef.current) {
        console.error("Le formulaire n'a pas été initialisé correctement.");
        return;
      }

      emailjs
        .sendForm(
          "service_fyhkjja",
          "template_whm6imh",
          formRef.current,
          "nwFxu-xv-hgOKw4NU"
        )
        .then((result) => {
          MySwal.fire({
            title: <p>Merci, votre message a bien été envoyé.</p>,
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "OK",
          }).then(() => {
            console.log(result.text);
            formRef.current?.reset();
          });
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de l'email :", error.text);
          MySwal.fire({
            title: <p>Erreur, votre message n'a pas pu être envoyé.</p>,
            icon: "error",
            showConfirmButton: true,
            confirmButtonText: "Réessayer",
          });
        });
    },
    [MySwal]
  );

  return (
    <div className="contact">
      <form ref={formRef} name="contact" onSubmit={sendEmail}>
        <h3>Contact</h3>
        <div className="fieldsForm">
          <div className="contactInfo">
            <div className="contactId">
              {["Nom *", "Prénom"].map((label, index) => (
                <div
                  key={index}
                  className={
                    index === 0 ? "contactLastname" : "contactFirstname"
                  }
                >
                  <label>{label}</label>
                  <input
                    type="text"
                    name={index === 0 ? "lastname" : "firstname"}
                    required={index === 0 ? true : undefined}
                  />
                </div>
              ))}
            </div>
            <div className="contactTool">
              {[
                { label: "@Mail *", name: "mail", type: "email" },
                { label: "Téléphone", name: "tel", type: "tel" },
              ].map((field, index) => (
                <div
                  key={index}
                  className={
                    field.name === "mail" ? "contactMail" : "contactTel"
                  }
                >
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.name === "mail" ? true : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="contactContenu">
            <div className="contactObject">
              <label>Objet *</label>
              <input type="text" name="object" required />
            </div>
            <div className="contactMessage">
              <label>Message *</label>
              <textarea name="message" required></textarea>
            </div>
          </div>
        </div>
        <div className="contactSubmit">
          <p className="requiredLabel">
            <span>* </span>
            Obligatoire pour soumettre le formulaire
          </p>
          <input type="checkbox" name="authorisation" required />
          <p>
            En soumettant ce formulaire, j&#39;accepte que mes données
            personnelles soient utilisées pour me recontacter. Aucun autre
            traitement ne sera effectué avec mes informations. Pour connaître et
            exercer vos droits, veuillez consultez la
            <Link to="/Politique-de-confidentialité" className="footerLink">
              {" "}
              Politique de confidentialité
            </Link>
            .
          </p>
          <input className="btnSendEmail" type="submit" value="Envoyez" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
