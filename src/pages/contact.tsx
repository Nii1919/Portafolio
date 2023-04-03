import React from "react";
import { Layout } from "../includes/layout"

const Contact: React.FC<any> =()=> {
  return(
    <Layout>
      <section id="contact-page" className="page-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Contact me</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact;