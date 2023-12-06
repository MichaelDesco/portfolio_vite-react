import React, { useRef, useState, useEffect, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './contact.scss';



const Contact = () => {
    const MySwal = withReactContent(Swal)
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //   emailjs.sendForm('service_fyhkjja', 'template_whm6imh', form.current, 'nwFxu-xv-hgOKw4NU')
    //     .then((result) => {
    //         MySwal.fire({
    //             title: <p>Merci, votre message a bien était envoyée.</p>,
    //             icon: success,
    //             showConfirmButton: true,
    //             confirmButtonText: "OK"
    //           }).then(() => {
    //             console.log(result.text);
    //           })
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fyhkjja', 'template_whm6imh', form.current, 'nwFxu-xv-hgOKw4NU')
            .then((result) => {
                MySwal.fire({
                    title: <p>Merci, votre message a bien été envoyé.</p>,
                    icon: 'success', // Corrigé de success à 'success' (chaîne)
                    showConfirmButton: true,
                    confirmButtonText: "OK"
                }).then(() => {
                    console.log(result.text);
                    // Efface les champs du formulaire après une soumission réussie
                    form.current.reset();
                });
            })
            .catch((error) => {
                console.error(error.text);
            });
    };
    

    const paragraphs = useMemo(() => [
        `"Ce que nous savons est une goutte d'eau, ce que nous ignorons est l'océan."<br />
        <span class="autorTransition">Isaac Newton</span>`,
        ` "L'imagination est plus importante que le savoir."<br />
        <span class="autorTransition">Nikola Tesla</span>`,
        ` "Rien dans la vie n'est à craindre, tout est à comprendre."<br />
        <span class="autorTransition">Marie Curie</span>`,
        ` "La connaissance s'accroît en proportion de ce que l'on partage."<br />
        <span class="autorTransition">Albert Einstein</span>`,
        `"Le web n'est pas seulement sur l'information, c'est sur l'interaction." <br />
        <span class="autorTransition">Tim Berners-Lee</span>`,
        `"La persévérance est non seulement de continuer, mais de recommencer après une erreur."<br />
        <span class="autorTransition">Confucius</span>`,
        `"La logique vous mènera d'un point A à un point B. L'imagination vous emmènera partout."<br />
        <span class="autorTransition">Albert Einstein</span>`,
        `"Les grandes choses ne sont pas faites par impulsion, mais par une série de petites choses réunies."<br />
        <span class="autorTransition">Vincent van Gogh</span>`,
        `"L'écriture est une exploration. Vous commencez par rien et apprenez au fur et à mesure." <br />
        <span class="autorTransition">E.L. Doctorow</span>`,
        `"L'innovation naît de la volonté de surmonter l'obstacle."<br />
        <span class="autorTransition">Albert Szent-Györgyi</span>`,
        `"Le succès n'est pas définitif, l'échec n'est pas fatal. C'est le courage de continuer qui compte."<br />
        <span class="autorTransition">Winston Churchill</span>`,
        `"Chaque expert a été un débutant une fois." <br />
        <span class="autorTransition">Helen Hayes</span>`,
        `"N'ayez pas peur de faire un grand pas. Vous ne pouvez pas traverser un abîme en petits sauts."<br />
        <span class="autorTransition">David Lloyd George</span>`,
        `"L'innovation vient du croisement des connaissances."<br />
        <span class="autorTransition">Nicholas Negroponte</span>`,
        `"Tout le monde savait que c'était impossible à faire. Puis un jour, quelqu'un est arrivé qui ne le savait pas, et il l'a fait."<br />
        <span class="autorTransition">Albert Einstein</span>`,
        `"Les ordinateurs sont inutiles. Ils ne peuvent que vous donner des réponses."<br />
        <span class="autorTransition">Pablo Picasso</span>`
    ], [])

    const [currentParagraph, setCurrentParagraph] = useState(0);

    useEffect(() => {
        const paragraphInterval = setInterval(() => {
            setCurrentParagraph((prevParagraph) =>
                prevParagraph < paragraphs.length - 1 ? prevParagraph + 1 : 0
            );
        }, 7200); // Change paragraph every 12 seconds

        return () => {
            clearInterval(paragraphInterval);
        };
    }, [paragraphs]);

    return (
        <>
            <div className="contact">
                <h3>Contact</h3>
                <form ref={form} name='contact' onSubmit={sendEmail}>
                    <div className='contactInfo'>
                        <div className="contactId">
                            <div className="contactLastname">
                                <label>Nom*</label>
                                <input type="text" name='lastname' required='requis'/>
                            </div>
                            <div className="contactFirstname">
                                <label>Prénom</label>
                                <input type="text" name='firstname'/>
                            </div>
                        </div>
                        <div className="contactTool">
                            <div className="contactMail">
                                <label>Mail*</label>
                                <input type="mail" name='mail' required='requis'/>
                            </div>
                            <div className="contactTel">
                                <label>Téléphone</label>
                                <input type="tel" name='tel'/>
                            </div>
                        </div>
                    </div>
                    <div className='contactContenu'>
                        <div className="contactObject">
                            <label>Objet*</label>
                            <input type="text" name='object' required='requis'/>
                        </div>
                        <div className="contactMessage">
                            <label>Message*</label>
                            <textarea name='message' required='requis'></textarea>
                        </div>
                    </div>
                    <div className='contactSubmit'>
                        <input type="checkbox" name='authorisation' required='requis'/>
                        <p>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me     recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la  
                            <Link to='/' className="footerLink"> Politique de confidentialité</Link>.
                        </p>
                        <input className='btnSendEmail' type="submit" value="Envoyez" />
                    </div>
                </form>
            </div>
            <div className="transition4">
                {paragraphs.map((paragraph, index) => (
                    <p id='quote'
                    key={index}
                    className={`transition-paragraph ${index === currentParagraph ? 'show' : ''} ${index !== currentParagraph ? 'fade-out' : ''}`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}>
                    </p>
                ))}
            </div>
        </>
    )
}
export default Contact;


