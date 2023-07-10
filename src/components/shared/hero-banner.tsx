import React from "react";

interface HeroBannerProps {
  textTitle?: string
}
export const HeroBanner: React.FC<HeroBannerProps> =({ textTitle })=> {
  return(
    <section className="hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="text-cta">{textTitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}