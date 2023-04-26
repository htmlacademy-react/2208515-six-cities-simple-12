import {Reviews} from '../../types/review';
import ReviewItem from '../review-item/review-item';
import {sortingReviews} from '../../util';
import {MAX_COMMENTS_COUNT} from '../../const';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList ({reviews}: ReviewsListProps): JSX.Element {
  const showReviews = sortingReviews(reviews).slice(0, MAX_COMMENTS_COUNT);
  return (
    <ul className="reviews__list">
      {showReviews.map((review) => {
        const keyValue = `${review.id}`;
        return <ReviewItem review={review} key={keyValue} />;
      })}
    </ul>
  );
}

export default ReviewsList;
