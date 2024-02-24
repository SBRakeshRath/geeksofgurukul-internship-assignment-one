import { useRef } from "react";
import "./card.scss";

export default function Card(props: {
  image: string;
  name: string;
  role: string;
  qualification: string;
  comment: string;
  imageAlt: string;
  logo1: string;
  logo2: string;
  logo1Alt: string;
  logo2Alt: string;
}) {
  const isClicked = useRef(false);
  const currentCardRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget.parentElement as HTMLElement | null;
    const cards = parent?.querySelectorAll(".card");
    cards?.forEach((card) => {
      const elem = card as HTMLElement;
      const commentContainer = elem.querySelector(
        ".commentContainer"
      ) as HTMLElement | null;
      if (commentContainer) {
        commentContainer.style.display = "none";
        commentContainer.style.animation = "none";
      }

      const currentCard = e.currentTarget as HTMLElement;
      const currentCommentContainer = currentCard.querySelector(
        ".commentContainer"
      ) as HTMLElement | null;

      if (elem !== e.currentTarget) return;
      if (currentCardRef.current === e.currentTarget) {
        currentCardRef.current = null;
        return;
      }

      currentCardRef.current = e.currentTarget as HTMLDivElement | null;

      if (currentCommentContainer) {
        currentCommentContainer.style.display = "block";
        currentCommentContainer.style.animationName = "moveTop";
      }
    });

    //handel Scroll

    // if (currentCardRef.current !== e.currentTarget) return;

    const scrollParent = (e.currentTarget.parentElement as HTMLElement | null)
      ?.parentElement as HTMLElement | null;
    isClicked.current
      ? (isClicked.current = false)
      : (isClicked.current = true);
    scrollParent?.childNodes.forEach((child) => {
      const elem = child as HTMLElement;

      isClicked.current
        ? (elem.style.animationPlayState = "paused")
        : (elem.style.animationPlayState = "running");
    });
  };
  return (
    <div className="card" onClick={clickHandler}>
      <div className="imageContainer">
        <img src={props.image} alt={props.imageAlt} />
      </div>
      <div className="descriptionContainer">
        <div className="nameAndRoleContainer">
          <h4>{props.name}</h4>
          <h6>{props.role}</h6>
        </div>
        <div className="qualificationContainer">
          <p dangerouslySetInnerHTML={{ __html: props.qualification }} />
        </div>
        <div className="imageContainers">
          <img src={props.logo1} alt={props.logo1Alt} />
          <img
            className="linkedInImage"
            src={props.logo2}
            alt={props.logo2Alt}
          />
        </div>
      </div>

      <div className="commentContainer">
        <h4>{props.name}</h4>
        <p>{props.comment}</p>
      </div>
    </div>
  );
}
