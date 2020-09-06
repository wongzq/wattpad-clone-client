import * as React from "react";
import StoryCard, { IStoryCardProps } from "./StoryCard";
import "./StoryCards.css";

export interface IStoryCardsProps {
  title: string;
  stories: IStoryCardProps[];
}

export default function StoryCards(props: IStoryCardsProps) {
  return (
    <div className="story-cards-container">
      <h4>{props.title}</h4>
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
