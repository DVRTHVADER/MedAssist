import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Acceuil from "./components/Acceuil/Acceuil";
import Services from "./components/Service/Services";
import Apropos from "./components/Apropos/Apropos";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="og">
      <Navbar />

      <section className="home">
        <Acceuil />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Apropos />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
