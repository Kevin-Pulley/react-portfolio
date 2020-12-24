import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
            <a href={props.link}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
              <img
                src={props.src}
                alt="profile pic"
                className="cards__item__img"
              />
          </figure>
            </a>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
