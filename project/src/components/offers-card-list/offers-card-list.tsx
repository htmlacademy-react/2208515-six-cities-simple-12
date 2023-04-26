import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardListProps = {
  offers: Offers;
  onListItemHover: (onListItemName: number) => void;
  className: string;
}

function OffersCardList ({offers, className, onListItemHover}: OffersCardListProps): JSX.Element {
  return (
    <div className={className}>
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return <OfferCard offer={offer} key={keyValue} onMouseOverHandler={(id) => onListItemHover(id)}/>;
      })}
    </div>
  );
}

export default OffersCardList;
