import * as React from "react";
import "./StoryCard.css";
import {
  StoryCardContainer,
  StoryCardTags,
  MCSS_Card,
  MCSS_CardImage,
  MCSS_Chip,
  MCSS_Icon,
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
      <MCSS_Card className="card">
        <div className="card-image">
          <MCSS_CardImage src={props.story.imgUrl}></MCSS_CardImage>
        </div>
      </MCSS_Card>
      <StoryCardTags>
        <MCSS_Icon className="material-icons">bookmark</MCSS_Icon>
        <MCSS_Chip className="chip">{props.story.tags}</MCSS_Chip>
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
