import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

const AddReview = ({films, reviews}) => {
  const [comment, setComment] = useState(``);
  const handleTextareaChange = (evt) => {
    evt.preventDefault();
    setComment(evt.target.value);
  };

  const [rating, setRating] = useState(1);
  const handleRatingChange = (evt) => {

    setRating(parseInt(evt.target.value, 10));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log({rating, comment, reviews}); // eslint-disable-line
  };

  let {filmId} = useParams();
  const {backgroundImage, name, posterImage} = films[filmId];

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          onSubmit={handleFormSubmit}
          action="#"
          className="add-review__form"
        >
          <div className="rating">
            <div className="rating__stars">
              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                checked = {rating === 1}
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value="2"
                checked = {rating === 2}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value="3"
                checked = {rating === 3}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value="4"
                checked = {rating === 4}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                value="5"
                checked = {rating === 5}
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-6"
                type="radio"
                name="rating"
                value="6"
                checked = {rating === 6}
              />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-7"
                type="radio"
                name="rating"
                value="7"
                checked = {rating === 7}
              />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-8"
                type="radio"
                name="rating"
                value="8"
                checked = {rating === 8}
              />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-9"
                type="radio"
                name="rating"
                value="9"
                checked = {rating === 9}
              />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input
                onChange={handleRatingChange}
                className="rating__input"
                id="star-10"
                type="radio"
                name="rating"
                value="10"
                checked = {rating === 10}
              />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={handleTextareaChange}
              value={comment}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
      })
  ),
  reviews: PropTypes.array.isRequired,

};
export default AddReview;
