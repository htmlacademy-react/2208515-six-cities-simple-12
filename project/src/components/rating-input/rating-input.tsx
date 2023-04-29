import {ChangeEvent} from 'react';

type RatingInputProps = {
  value: number;
  title: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: string;
}

function RatingInput(props: RatingInputProps): JSX.Element {
  const {value, title, onChange, rating} = props;
  const isChecked = rating === value.toString();
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={`${value}`}
        id={`${value}-stars`}
        type="radio"
        onChange={onChange}
        checked={isChecked}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={`${title}`}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingInput;
