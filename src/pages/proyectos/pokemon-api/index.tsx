import React from "react";
import { Layout } from "../../../includes/layout"

const PokemonApi: React.FC<any> =()=> {
  return(
    <Layout>
      <section id="pokemon-api-page" className="page-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Pokemon Api</h1>
            </div>
          </div>
        </div>
      </section>    
    </Layout>
  )
}

export default PokemonApi;