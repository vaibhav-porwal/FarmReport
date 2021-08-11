import React from 'react';
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div style={{margin:10}} className="col-md-4 col-12 mx-auto">
        <div className="card">
        
          <div className="card-body">
            <h5 className="card-title font-big-weight-bold-">New Report Register</h5>
            <p className="card-text">
         {props.text}
                 </p>
            <NavLink to="/form" className="btn btn-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;