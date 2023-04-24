import {Helmet} from 'react-helmet-async';
import {City, Offer} from '../../types/offer';
import OffersCardList from '../../components/offers-card-list/offers-card-list';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Map from '../../components/map/map';
import {changeCity} from '../../store/action';
import CitiesList from '../../components/cities-list/cities-list';
import {fetchOfferAction} from '../../store/api-action';
import HeaderNav from '../../components/header-nav/header-nav';

function MainScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = useAppSelector(() => offers.filter((offer) => offer.city.name === currentCity.name));

  useEffect(() => {
    if (!offers.length) {
      dispatch(fetchOfferAction());
    }
  }, [dispatch, offers]);

  const cityChangeHandler = (city: City) => {dispatch(changeCity(city));};

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined> (
    undefined
  );

  const listItemHoverHandler = (id: number) => {
    const currentOffer = currentOffers.find((offer) =>
      offer.id === id,
    );
    setSelectedOffer (currentOffer);
  };

  return (
    <>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList city={currentCity} onCityClick={cityChangeHandler}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersCardList onListItemHover={listItemHoverHandler} offers={currentOffers} />
            </section>
            <div className="cities__right-section">
              <Map className={'cities__map map'} city={currentCity} offers={currentOffers} selectedOffer={selectedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;

