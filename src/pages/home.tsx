import React from "react";
import { Layout } from "../includes/layout"
import { Proyects } from "../components/home/proyects";
import { About } from "../components/home/about";
import { Newsletter } from "../components/home/newsletters";
import { HeroBanner } from "../components/shared/hero-banner";

const Home: React.FC<any> =()=> {
  return(
    <Layout>
      <section id="home-page" className="page-container">
        <HeroBanner/>
        <Proyects/>
        <About/>
        <Newsletter/>
      </section>  
    </Layout>
  )
}

export default Home;