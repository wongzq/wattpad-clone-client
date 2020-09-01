import * as React from "react";

export interface ICardProps {}

export default function Card(props: ICardProps) {
  return (
    <div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <a href="/">This is a link</a>
          <a href="/">This is a link</a>
        </div>
      </div>
    </div>
  );
}
