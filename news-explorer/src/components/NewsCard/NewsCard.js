import React from 'react';
import './NewsCard.css';
import bookmarkInactive from '../../images/newscard/bookmark-inactive.svg';

function NewsCard(props) {

  const [isSaved , setIsSaved] = React.useState(false);

  const cardSaveButtonClassName = "test";
  function handleClick() {
    // props.onCardClick();
  }

  function handleSaveCardClick() {
    // props.onCardSave();
  }

  return (
    <div className="newscard">
      <button className="newscard__save-btn" type="button" onClick={handleSaveCardClick}><img className="newscard__icon" src={bookmarkInactive} /></button>
      <img className="newscard__image" src={props.link} />
      <div className="newscard__content">
        <p className="newscard__date">{props.date}</p>
        <h4 className="newscard__title">{props.title}</h4>
        <p className="newscard__description">{props.description}</p>
        <p className="newscard__author">{props.author}</p>
      </div>
    </div>
  );
}

export default NewsCard;
