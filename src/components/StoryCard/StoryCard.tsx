import * as React from "react";
import "./StoryCard.css";
import {
  StoryCardContainer,
  StoryCardTags,
  MaterializeCard,
  MaterializeCardImage,
  MaterializeChip,
  MaterializeIcon,
} from "./StoryCardStyle";

export interface IStoryCardInfo {
  title?: string;
  imgUrl: string;
  tags: string[];
}

export default function StoryCard(props: { story: IStoryCardInfo }) {
  const useStyledComponents = true;

  return useStyledComponents ? (
    <StoryCardContainer>
      <MaterializeCard className="card">
        <div className="card-image">
          <MaterializeCardImage src={props.story.imgUrl} />
        </div>
      </MaterializeCard>
      <StoryCardTags>
        <MaterializeIcon className="material-icons">bookmark</MaterializeIcon>
        <MaterializeChip className="chip">{props.story.tags}</MaterializeChip>
      </StoryCardTags>
    </StoryCardContainer>
  ) : (
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
