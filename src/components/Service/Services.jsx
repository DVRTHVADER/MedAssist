import React from "react";
import "./Services.css";
import { motion } from "motion/react";

const serviceData = [
  {
    title: "Aide aux soins personnels",
    description:
      "Nos intervenants accompagnent vos proches dans les gestes essentiels du quotidien : toilette, habillage, mobilité et hygiène. Un soutien humain et discret pour préserver la dignité et le confort à chaque instant.",
  },
  {
    title: "Préparation des repas",
    description:
      "Nous cuisinons des repas sains et adaptés aux besoins de chacun. Nos services incluent la planification, les courses et la préparation, afin d'assurer une alimentation équilibrée et savoureuse au quotidien.",
  },
  {
    title: "Entretien ménager léger",
    description:
      "Nous veillons à la propreté et à l’ordre du domicile avec des services de ménage, de lessive et de rangement. Un environnement propre, sécuritaire et agréable, sans effort.",
  },
  {
    title: "Accompagnement et transport",
    description:
      "Nos accompagnateurs assurent les déplacements vers les rendez-vous médicaux, les courses ou les sorties sociales. Un moyen fiable de rester actif, autonome et connecté à la vie sociale.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Nos Services</h2>
      <div className="services-container">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
