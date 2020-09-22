import * as React from "react";
import "./Home.css";
import StoryCards from "../../components/StoryCards/StoryCards";
import { IStoryCardInfo } from "../../components/StoryCard/StoryCard";
import { IStoryTileInfo } from "../../components/StoryTile/StoryTile";
import { storyCards, storyTiles } from "./Data";

export interface IBrowseProps {}

export default function Home(props: IBrowseProps) {
  return (
    <div className="home-container">
      <StoryCards
        title="Top Picks For You"
        featured={storyTiles[0]}
        stories={storyCards[0]}
      />
      <hr />
      <StoryCards title="New Arrivals" stories={storyCards[1]} />
      <hr />
      <StoryCards
        title="Completed Stories"
        featured={storyTiles[1]}
        stories={storyCards[2]}
      />
    </div>
  );
}
