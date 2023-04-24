import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardListProps = {
  offers: Offers;
  onListItemHover: (onListItemName: number) => void;
}

function OffersCardList ({offers, onListItemHover}: OffersCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return <OfferCard offer={offer} key={keyValue} onMouseOverHandler={(id) => onListItemHover(id)}/>;
      })}
    </div>
  );
}

export default OffersCardList;
