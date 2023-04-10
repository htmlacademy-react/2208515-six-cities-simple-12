import {Link} from 'react-router-dom';
import {Offer, ActiveOffer} from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  onActiveCardChange: (activeOffer: ActiveOffer) => void;
}

function OfferCard ({offer, onActiveCardChange}: OfferCardProps): JSX.Element {
  const {id, picture, heading, isPremium, type, rating, price} = offer;
  const showRating = rating / 5 * 100;
  const showPremium = isPremium ? (<div className="place-card__mark"><span>Premium</span></div>) : '';

  return (
    <article onMouseEnter={() => onActiveCardChange(offer)} onMouseLeave={() => onActiveCardChange(null)} className="cities__card place-card">
      {showPremium}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={picture[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${showRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{heading}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
