import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardListProps = {
  offers: Offers;
}

function OffersCardList ({offers}: OffersCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return <OfferCard offer={offer} key={keyValue} />;
      })}
    </div>
  );
}

export default OffersCardList;
