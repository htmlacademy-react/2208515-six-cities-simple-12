import {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import {MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT, RATING_LABELS} from '../../const';
import {useAppDispatch} from '../../hooks';
import {sendReviewAction} from '../../store/api-action';
import {ReviewData} from '../../types/review-data';
import RatingInput from '../rating-input/rating-input';

type CommentFormProps = {
  offerId: number;
}

function CommentForm ({offerId}: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isDisabled, setDisabled] = useState(true);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };
  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  useEffect(() => {
    if (rating && (review.trim().length > MIN_LENGTH_COMMENT && review.trim().length < MAX_LENGTH_COMMENT)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

  }, [review, rating, isDisabled]);

  const onSubmit = (value: ReviewData) => {
    dispatch(sendReviewAction(value));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      id: offerId,
      comment: review,
      rating: Number(rating)
    });
    setDisabled(true);
    setRating('');
    setReview('');
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_LABELS.map((label) => (
          <RatingInput
            value={label.value}
            title={label.title}
            onChange={handleRatingChange}
            rating={rating}
            key={label.value}
          />)
        )}
      </div>
      <textarea
        onChange={handleReviewChange}
        value={review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
