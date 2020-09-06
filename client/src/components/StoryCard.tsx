import * as React from "react";
import "./StoryCard.css";

export interface IStoryCardProps {
  imgUrl: string;
  genre: string;
  title: string;
  parts?: number;
  completed?: boolean;
  description?: string;
}

export default function StoryCard(props: { story: IStoryCardProps }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={props.story.imgUrl} />
        </div>
      </div>
      <div className="card-tags">
        <i className="material-icons">bookmark</i>
        <div className="chip">{props.story.genre}</div>
      </div>
    </div>
  );
}
