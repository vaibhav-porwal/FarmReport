import React from 'react'
import { NavLink } from "react-router-dom";
const Weather = () => {
    return (
        <div>
             <div className="col-md-4 col-12 mx-auto">
        <div className="card">
        
          <div className="card-body">
            <h5 className="card-title font-big-weight-bold-">Weather App</h5>
            <p className="card-text">
      Check Weather for your place
                 </p>
            <NavLink to="/weather" className="btn btn-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Weather
