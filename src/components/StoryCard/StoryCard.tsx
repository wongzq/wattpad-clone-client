import * as React from "react";
import "./StoryCard.css";
import {
  StoryCardContainer,
  StoryCardTags,
  MCSSCard,
  MCSSCardImage,
  MCSSChip,
  MCSSIcon,
} from "./StoryCard.style";

export interface IStoryCardInfo {
  title?: string;
  imgUrl: string;
  tags: string[];
}

export default function StoryCard(props: { story: IStoryCardInfo }) {
  const useStyledComponents = true;

  return useStyledComponents ? (
    <StoryCardContainer>
      <MCSSCard className="card">
        <div className="card-image">
          <MCSSCardImage src={props.story.imgUrl}></MCSSCardImage>
        </div>
      </MCSSCard>
      <StoryCardTags>
        <MCSSIcon className="material-icons">bookmark</MCSSIcon>
        <MCSSChip className="chip">{props.story.tags}</MCSSChip>
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
