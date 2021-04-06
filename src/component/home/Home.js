import React from 'react'
import AOS from 'aos';
import './index.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
    return (
        <div>
                {/* HEADER*/}
                <div className="header">
                    <img src="images/logo.png" alt="logo"/>
                    <div className="header__menu">
                        <a href="#about">A PROPOS</a>
                        <a href="#whatWeThink">CE QUE NOUS CROYONS</a>
                        <a href="#expertise">EXPERTISE</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    </div>
                    {/* end of HEADER */}
                    <div className="intro" style={
                        {
                            backgroundImage: `url("../images/pexels-pixabay-209224.jpg")`,
                            backgroundPosition: center,
                            backgroundSize: cover,
                            minHeight: '90vh',
                            display:flex,
                            justifyContent:center,
                            alignItems:center
                        }
                    }>
                            <div className="intro__info">
                                <h2>GD Experts</h2>
                                <p>Cabinet conseils en gouvernance et développement.</p>
                            </div>
                        </div>

                        <div className="whoWeAre" id="about">
                            <div className="whoWeAre__info" data-aos="fade-right" data-aos-duration="1000">
                                <h2>Qui sommes-nous ?</h2>
                                <p>GD-experts est un cabinet conseil qui apporte son expertise aux institutions publiques et privées dans le domaine de Gouvernance et développement. GD</p>
                                <a href="" className="link">En savoir plus</a>
                            </div>
                            <img src="/images/undraw_Success_factors_re_ce93.svg" alt="" data-aos="fade-left" data-aos-duration="1000"/>
                        </div>



                        <div class="whatWeThink" id="whatWeThink">
                                <img src="images/undraw_Project_completed_re_pqqq (1).svg" alt="" data-aos="fade-right" data-aos-duration="1000"/>
                                <div className="whatWeThink__info" data-aos="fade-left" data-aos-duration="1000">
                                    <h2>Ce que nous croyons ?</h2>
                                    <p>GD-experts est un cabinet conseil qui apporte son expertise aux institutions publiques et privées dans le domaine de Gouvernance et développement. GD</p>
                                    <a href="" className="link">En savoir plus</a>
                                </div>
                         </div>

                         {/* EXPERTISE */}
                         <div class="expertise" id="expertise">
                                <div className="expertise__info" data-aos="fade-right" data-aos-duration="1000">
                                    <h2>Expertise</h2>
                                    <h3>Avec autant d'années d'experience dans de ces domaine</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quasi quae inventore voluptates iure tempora, voluptas recusandae saepe. Saepe excepturi in officiis nulla!</p>
                                </div>
                                <images src="images/undraw_certificate_343v.svg" alt="" data-aos="fade-left" data-aos-duration="1000"/>
                            </div>
                         {/* END OF EXPERTISE */}

                                      {/*  EXPERTISE OPTIONS*/}
                    <div class="expertiseOptions">
                        <div class="option">
                            <i class="fas fa-people-carry"></i>
                            <h5>Developpement local</h5>
                        </div>
                        <div class="option">
                            <i class="fas fa-tasks"></i>
                            <h5>Gestion des project</h5>
                        </div>
                        <div class="option">
                            <i class="fas fa-people-arrows"></i>
                            <h5>Bonne gouvernance</h5>
                        </div>
                        <div class="option">
                            <i class="fas fa-hand-holding-usd"></i>
                            <h5>Reintegration socio-economique</h5>
                        </div>
                    </div>
                    {/* END OF EXPERTISE OPTIONS*/}
                    {/* LOCATION */}
                    <div className="location" id="contact">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.872748673434!2d29.3558656142279!3d-3.38125629753871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c1832a9a322c89%3A0xf256414845aa0a5b!2sL%C3%BAxus%20Boutique!5e0!3m2!1sfr!2sbi!4v1617571633448!5m2!1sfr!2sbi" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            <div className="location__info" data-aos="zoom-in" data-aos-duration="1000">
                                <h2>Location</h2>
                                <p>Bujumbura,BURUNDI Boulevard Melchior NDADAYE</p>
                                <h2>Contact Us</h2>
                                <p>Phone:(+257) 00 000 000<br>gd-experts2020@gmail.com</br> </p>
                            </div>
                        </div>
                        <div className="footer">
                            <h6> &copy;{new Date().getFullYear()} gd-experts all right-reserved</h6>
                        </div>
                    {/* END OF LOCATION */}

                        


            
         </div>
    )
}

export default Home
