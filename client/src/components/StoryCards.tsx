import * as React from "react";
import "./StoryCards.css";
import StoryCard, { IStoryCardInfo } from "./StoryCard";
import StoryTile, { IStoryTileInfo } from "./StoryTile";

export interface IStoryCardsProps {
  title: string;
  featured?: IStoryTileInfo;
  stories: IStoryCardInfo[];
}

export default function StoryCards(props: IStoryCardsProps) {
  return (
    <div className="story-cards-container">
      <h4>{props.title}</h4>
      {props.featured ? <StoryTile story={props.featured} /> : null}
      <div className="stories-list">
        {props.stories.map((story) => (
          <div className="story-card">
            <StoryCard story={story} />
          </div>
        ))}
      </div>
    </div>
  );
}
