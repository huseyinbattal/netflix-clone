import React from "react";
import "./PlansScreen.css";



function PlansScreen() {
   
  return (
      <div className="plansScreen">
          
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h4 className="premium__h4">Premium</h4>
          <h5 className="premium__h5">(4K + HDR)</h5>
          <button disabled className="premium">Current Package</button>
        </div>
        <div className="plansScreen__info">
          <h4>Basic</h4>
          <h5>(720p)</h5>
          <button>Subscribe</button>
        </div>
        <div className="plansScreen__info">
          <h4>Standart</h4>
          <h5>(1080p)</h5>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default PlansScreen;
