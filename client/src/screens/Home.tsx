import * as React from "react";
import "./Home.css";
import StoryCards from "../components/StoryCards";
import { IStoryCardInfo } from "../components/StoryCard";
import { IStoryTileInfo } from "../components/StoryTile";

export interface IBrowseProps {}

export default function Home(props: IBrowseProps) {
  const storyCards: IStoryCardInfo[][] = [
    [
      {
        title: "The Final Empire",
        imgUrl: "https://m.media-amazon.com/images/I/51Xs1z2wvEL.jpg",
        tags: ["fantasy"],
      },
      {
        title: "The Well of Ascension",
        imgUrl:
          "https://www.dubraybooks.ie/images/thumbs/009/0098531_9780575089938_625.jpeg",
        tags: ["fantasy"],
      },
      {
        title: "The Hero of Ages",
        imgUrl:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5750/9780575089945.jpg",
        tags: ["fantasy"],
      },
      {
        title: "The Alloy of Law",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51AT4y75bJL._SX324_BO1,204,203,200_.jpg",
        tags: ["fantasy"],
      },
      {
        title: "Shadows of Self",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51ezXqXvhOL.jpg",
        tags: ["fantasy"],
      },
      {
        title: "The Bands of Mourning",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51D+bsrnDZL._SX325_BO1,204,203,200_.jpg",
        tags: ["fantasy"],
      },
    ],
    [
      {
        title: "The Way of Kings",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71TotnV3idL.jpg",
        tags: ["fantasy"],
      },
      {
        title: "Words of Radiance",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71WAIGX6PVL.jpg",
        tags: ["fantasy"],
      },
      {
        title: "Oathbringer",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71jya4AxE8L.jpg",
        tags: ["fantasy"],
      },
    ],
    [
      {
        title: "The Hunger Games",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
        tags: ["sci-fi"],
      },
      {
        title: "Catching Fire",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61VUik8NJ8L.jpg",
        tags: ["sci-fi"],
      },
      {
        title: "Mockingjay",
        imgUrl: "https://m.media-amazon.com/images/I/51zkheo7x8L.jpg",
        tags: ["sci-fi"],
      },
    ],
  ];
  const storyTiles: IStoryTileInfo[] = [
    {
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71ri38cFODL.jpg",
      tag: "fantasy",
      title: "Elantris",
      parts: 65,
      completed: true,
      description:
        "Elantris was the capital of Arelon: gigantic, beautiful, literally radiant, filled with benevolent beings who used their powerful magical abilities for the benefit of all. Yet each of these demigods was once an ordinary person until touched by the mysterious transforming power of the Shaod.",
    },
    {
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71lZgzNE2kL.jpg",
      tag: "horror",
      title: "It",
      parts: 28,
      completed: true,
      description:
        "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
    },
  ];

  return (
    <div className="browse-container">
      {/* <div className="slider-container">Slider</div> */}
      {/* <div className="header">Welcome home, Liith!</div> */}
      {/* <div className="featured">Featured story</div> */}

      {/* Stories */}
      <StoryCards
        title="Top Picks For You"
        featured={storyTiles[0]}
        stories={storyCards[1]}
      />
      <hr />
      <StoryCards title="New Arrivals" stories={storyCards[0]} />
      <hr />
      <StoryCards
        title="Completed Stories"
        featured={storyTiles[1]}
        stories={storyCards[2]}
      />
    </div>
  );
}
