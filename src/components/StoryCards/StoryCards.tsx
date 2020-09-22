import * as React from "react";
import "./StoryCards.css";
import StoryCard, { IStoryCardInfo } from "../StoryCard/StoryCard";
import StoryTile, { IStoryTileInfo } from "../StoryTile/StoryTile";

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
        {props.stories.map((story, index) => (
          <div className="story-card" key={index}>
            <StoryCard story={story} />
          </div>
        ))}
      </div>
    </div>
  );
}
