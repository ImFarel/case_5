import React from "react";
import "./cards.css";

export default function CardComp({ title, desc, button, img }) {
  return (
    <div className="card shadow-sm" key={title}>
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={
          `${img.placeholder}: ${img.thumb}` ?? "Placeholder: Thumbnail"
        }
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>{img.placeholder ?? "Placeholder"}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          {img.thumb ?? "Thumbnail"}
        </text>
      </svg>

      <div className="card-body">
        <p className="card-text">{desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            {button.map((val, i) => (
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                {val}
              </button>
            ))}
          </div>
          {/* <small className="text-muted">9 mins</small> */}
        </div>
      </div>
    </div>
  );
}
