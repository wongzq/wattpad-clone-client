import styled from "styled-components";

export const StoryCardContainer = styled.div`
  margin-right: 2rem;
`;

export const MCSSCard = styled.div.attrs({ className: "card" })`
  width: 11rem;
  border-radius: 0.5rem !important;
`;

interface Props {
  padding: string;
}
export const MCSSCardImage = styled.div.attrs({ className: "card-image" })`
  & img {
    border-radius: 0.5rem !important;
  }
`;

export const StoryCardTags = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;

export const MCSSIcon = styled.i.attrs({ className: "material-icons" })`
  font-size: 1.3rem;
  margin-right: 0.2rem;
`;

export const MCSSChip = styled.div.attrs({ className: "chip" })`
  margin: 0.5rem 0;
  padding: 0 1rem;
  font-size: 1rem;
`;
