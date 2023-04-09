import {Offers, ActiveOffer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardListProps = {
  offers: Offers;
  onActiveCardChange: (activeOffer: ActiveOffer) => void;
}

function OffersCardList ({offers, onActiveCardChange}: OffersCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return <OfferCard offer={offer} key={keyValue} onActiveCardChange={onActiveCardChange}/>;
      })}
    </div>
  );
}

export default OffersCardList;
