import React from "react";
import "./feature.css";

export default function Feature() {
  return (
    <>
      <h2 className="pb-2 border-bottom">Aktifitas dan Ekstrakulikuler</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2" />
            </svg>
          </div>
          <div>
            <h2>Paduan Suara</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#cpu-fill" />
            </svg>
          </div>
          <div>
            <h2>Komputer</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#tools" />
            </svg>
          </div>
          <div>
            <h2>Menjahit</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
