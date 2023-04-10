import {Review} from '../../types/review';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem ({review}: ReviewItemProps): JSX.Element {
  const {avatar, nameAuthor, evaluation, data, feedback} = review;
  const showEvaluation = Math.round(evaluation / 5) * 100;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {nameAuthor}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${showEvaluation}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {feedback}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{data}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
