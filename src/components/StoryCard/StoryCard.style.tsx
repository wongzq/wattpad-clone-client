import styled from "styled-components";

export const StoryCardContainer = styled.div`
  margin-right: 2rem;
`;
export const MCSS_Card = styled.div`
  width: 11rem;
  border-radius: 0.5rem !important;
`;
export const MCSS_CardImage = styled.img`
  border-radius: 0.5rem !important;
  src: url(${(props) => props.src});
  alt: "Book cover";
`;
export const StoryCardTags = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;
export const MCSS_Icon = styled.i`
  font-size: 1.3rem;
  margin-right: 0.2rem;
`;
export const MCSS_Chip = styled.div`
  margin: 0.5rem 0;
  padding: 0 1rem;
  font-size: 1rem;
`;