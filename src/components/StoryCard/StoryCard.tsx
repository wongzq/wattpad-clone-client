import * as React from "react";
import "./StoryCard.css";

export interface IStoryCardInfo {
  title?: string;
  imgUrl: string;
  tags: string[];
}

export default function StoryCard(props: { story: IStoryCardInfo }) {
  return (
    <div className="story-card-container">
      <div className="card">
        <div className="card-image">
          <img src={props.story.imgUrl} alt="Book cover" />
        </div>
      </div>
      <div className="card-tags">
        <i className="material-icons">bookmark</i>
        <div className="chip">{props.story.tags}</div>
      </div>
    </div>
  );
}
