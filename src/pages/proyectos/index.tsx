import React from "react";
import { Layout } from "../../includes/layout"

const About: React.FC<any> =()=> {
  return(
    <Layout>
      <section id="about-page" className="page-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Projects</h1>
            </div>
          </div>
        </div>
      </section>    
    </Layout>
  )
}

export default About;