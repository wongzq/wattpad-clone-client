import * as React from "react";
import "./Home.css";
import StoryCards from "../components/StoryCards";
import { IStoryCardProps } from "../components/StoryCard";

export interface IBrowseProps {}

export default function Home(props: IBrowseProps) {
  const stories: IStoryCardProps[][] = [
    [
      {
        title: "The Final Empire",
        imgUrl: "https://m.media-amazon.com/images/I/51Xs1z2wvEL.jpg",
        genre: "fantasy",
      },
      {
        title: "The Well of Ascension",
        imgUrl:
          "https://www.dubraybooks.ie/images/thumbs/009/0098531_9780575089938_625.jpeg",
        genre: "fantasy",
      },
      {
        title: "The Hero of Ages",
        imgUrl:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5750/9780575089945.jpg",
        genre: "fantasy",
      },
    ],
    [
      {
        title: "The Way of Kings",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71TotnV3idL.jpg",
        genre: "fantasy",
      },
      {
        title: "Words of Radiance",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71WAIGX6PVL.jpg",
        genre: "fantasy",
      },
      {
        title: "Oathbringer",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71jya4AxE8L.jpg",
        genre: "fantasy",
      },
    ],
    [
      {
        title: "The Hunger Games",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
        genre: "Sci-Fi",
      },
      {
        title: "Catching Fire",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61VUik8NJ8L.jpg",
        genre: "Sci-Fi",
      },
      {
        title: "Mockingjay",
        imgUrl:
          "https://m.media-amazon.com/images/I/51zkheo7x8L.jpg",
        genre: "Sci-Fi",
      },
    ],
  ];

  return (
    <div className="browse-container">
      {/* <div className="slider-container">Slider</div> */}
      {/* <div className="header">Welcome home, Liith!</div> */}
      {/* <div className="featured">Featured story</div> */}

      {/* Stories */}
      <StoryCards title="Completed Stories" stories={stories[0]}></StoryCards>
      <hr />
      <StoryCards title="Top Picks For You" stories={stories[1]}></StoryCards>
      <hr />
      <StoryCards title="New Arrivals" stories={stories[2]}></StoryCards>
    </div>
  );
}
