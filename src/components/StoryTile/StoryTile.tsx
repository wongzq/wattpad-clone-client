import * as React from "react";
import "./StoryTile.css";

export interface IStoryTileInfo {
  imgUrl: string;
  tag: string;
  title: string;
  parts: number;
  completed: boolean;
  description: string;
  genre: string[];
}

export default function StoryTile(props: { story: IStoryTileInfo }) {
  return (
    <div className="story-tile-container">
      <div className="story-card card">
        <div className="card-image">
          <img src={props.story.imgUrl} alt="Book cover" />
        </div>
      </div>
      <div className="story-info">
        <h4 className="story-title">{props.story.title}</h4>
        <div className="story-meta"></div>
        <span className="story-parts">
          <i className="material-icons">list</i>
          {props.story.parts} parts
        </span>
        <div className="chip-container">
          <div
            className={
              "chip story-completed" +
              (props.story.completed ? " completed" : " draft")
            }
          >
            {props.story.completed ? "Completed" : "Draft"}
          </div>
          {props.story.genre.map((genre) => (
            <div className="chip">{genre}</div>
          ))}
        </div>
        <i className="material-icons story-add-library"></i>
        <span className="story-description">{props.story.description}</span>
      </div>
    </div>
  );
}
