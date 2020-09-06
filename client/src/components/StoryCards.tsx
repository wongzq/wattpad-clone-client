import * as React from "react";
import { IStoryCardProps } from "./StoryCard";

export interface IStoryCardsProps {
  title: string;
  stories: IStoryCardProps[];
}

export default function StoryCards(props: IStoryCardsProps) {
  return (
    <div className="story-cards-container">
      <h3>Romance</h3>
    </div>
  );
}
