import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import im1 from "./images/im1.jpg";
import im2 from "./images/im4.jpg";
import im3 from "./images/im3.jpg";

import "./Apropos.css";

const Apropos = () => {
  return (
    <section id="apropos" className="apropos-section">
      <div className="apropos-container">
        <div className="apropos-text-container">
          <h2 className="apropos-title">À Propos de Nous</h2>
          <p className="apropos-text">
            Notre entreprise de soins personnels à domicile est née d’une
            passion profonde : offrir à chacun le confort, la dignité et
            l’attention qu’il mérite, dans le lieu qui lui est le plus cher —
            son propre foyer. Chez
            <strong> Proxyb </strong>, Nous croyons que la qualité des soins
            ne réside pas seulement dans les compétences, mais aussi dans la
            bienveillance, l’écoute et la présence. C’est pourquoi notre
            engagement va au-delà du simple accompagnement : nous construisons
            une relation de confiance avec chaque personne que nous aidons.
          </p>
          <p className="apropos-text">
            Notre équipe est composée de professionnels expérimentés,
            empathiques et certifiés dans le domaine des soins à la personne.
            Grâce à notre expertise, nous offrons des services personnalisés,
            humains et sécuritaires, adaptés aux besoins uniques de chaque
            client.
          </p>
        </div>

        <div className="apropos-carousel">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
              <img src={im3} alt="" className="image1" />
            </div>
            <div>
              <img src={im2} alt="" className="image2" />
            </div>
            <div>
              <img src={im1} alt="" className="image3" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
