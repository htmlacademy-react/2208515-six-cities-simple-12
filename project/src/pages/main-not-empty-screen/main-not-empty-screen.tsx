import {City, Offers, Offer} from '../../types/offer';
import {getSorting} from '../../store/offers-process/selector';
import {useAppSelector} from '../../hooks';
import {sortingOffers} from '../../util';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import OffersCardList from '../../components/offers-card-list/offers-card-list';

type MainNotEmptyScreenProps = {
  offers: Offers;
  currentCity: City;
  city: City;
  selectedOffer: Offer | undefined;
  onListItemHover: (onListItemName: number) => void
}

function MainNotEmptyScreen ({currentCity, city, offers, selectedOffer, onListItemHover}: MainNotEmptyScreenProps): JSX.Element {
  const selectedSorting = useAppSelector(getSorting);

  sortingOffers(offers, selectedSorting);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
        <Sorting />
        <OffersCardList
          className={'cities__places-list places__list tabs__content'}
          onListItemHover={(id) => onListItemHover(id)}
          offers={offers}
        />
      </section>
      <div className="cities__right-section">
        <Map
          className={'cities'}
          city={city}
          offers={offers}
          selectedOffer={selectedOffer}
        />
      </div>
    </div>
  );
}

export default MainNotEmptyScreen;
