import React, { useContext } from "react";
import "./Releted.css";
import { ThemeContext } from "../ThemeContext/Theme";

const Releted = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="beauty-relted-main-container">
      <div className="beauty-relted-container" style={theme==="light"?{backgroundColor:""}:{backgroundColor:"white"}}>
        <img src={props.Image} alt="" className="releted-img-image" />
         
        <div className="releted-beauty-details">
          <div className="releted-rating-section">
            <p className="related-rating">{props.rating}</p>
            <img src={props.greenstar} alt="" className="related-green-image" />
          </div>
          <hr style={{ width: "100%" }} />
          <p className="releted-Title">{props.Title}</p>
          <p className="releted-description">{props.Description}</p>

          <div className="related-amount-section">
            <p className="related-Namount">Rs.{props.Namount}</p>
            <p className="related-Oamount">Rs.{props.Oamount}</p>
            <p className="related-offer">{props.offer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releted;
