import React from "react";
import { Layout } from "../includes/layout"
import { HeroBanner } from "../components/shared/hero-banner";

const Home: React.FC<any> =()=> {
  return(
    <Layout>
      <HeroBanner textTitle={`nick's portafolio`}/>
      <section id="proyects-section" className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Most resent proyects</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="about-section" className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">About</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletters-section" className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Newsletter</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home;