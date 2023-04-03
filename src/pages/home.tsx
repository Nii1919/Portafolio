import React from "react";
import { Layout } from "../includes/layout"

const Home: React.FC<any> =()=> {
  return(
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1 className="text-center">Must resent proyects</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;