import React from "react";
import "../components/card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="left">
        <img src={props.src} alt="" />
      </div>
      <div className="right">
        <h4>{props.title}</h4>
        <p>{props.summary}</p>
        <div className="down">
          <h6>{props.upload_date}</h6>
          <button
            type="button"
            onClick={() => window.open(props.source_link, "_blank")}
          >
            view post🔗
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
