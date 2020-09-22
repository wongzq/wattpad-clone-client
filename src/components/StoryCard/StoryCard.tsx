import * as React from "react";
import "./StoryCard.scss";
import styles from "./StoryCard.module.scss";
import {
  StoryCardContainer,
  StoryCardTags,
  MCSSCard,
  MCSSCardImage,
  MCSSChip,
  MCSSIcon,
} from "./StoryCard.styled";

export interface IStoryCardInfo {
  title?: string;
  imgUrl: string;
  tags: string[];
}

enum EDisplayType {
  StyledComponents,
  SCSSModules,
  SCSSImport,
}

export default function StoryCard(props: { story: IStoryCardInfo }) {
  let displayType: EDisplayType = EDisplayType.SCSSImport;

  switch (+displayType) {
    case EDisplayType.StyledComponents:
      return (
        <StoryCardContainer>
          <MCSSCard>
            <MCSSCardImage>
              <img src={props.story.imgUrl} alt="Book cover" />
            </MCSSCardImage>
          </MCSSCard>
          <StoryCardTags>
            <MCSSIcon>bookmark</MCSSIcon>
            <MCSSChip>{props.story.tags}</MCSSChip>
          </StoryCardTags>
        </StoryCardContainer>
      );

    case EDisplayType.SCSSModules:
      return (
        <div className={styles.storyCardContainer}>
          <div className={styles.card + " card"}>
            <div className={styles.cardImage + " card-image"}>
              <img src={props.story.imgUrl} alt="Book cover" />
            </div>
          </div>
          <div className={styles.cardTags}>
            <i className={styles.materialIcons + " material-icons"}>bookmark</i>
            <div className={styles.chip + " chip"}>{props.story.tags}</div>
          </div>
        </div>
      );

    case EDisplayType.SCSSImport:
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

    default:
      return <div></div>;
  }
}
