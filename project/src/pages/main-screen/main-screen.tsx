import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {City, Offer} from '../../types/offer';
import OffersCardList from '../../components/offers-card-list/offers-card-list';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Map from '../../components/map/map';
import {fillOffers, changeCity} from '../../store/action';
import CitiesList from '../../components/cities-list/cities-list';

type MainScreenProps = {
  email: string;
}

function MainScreen (props: MainScreenProps): JSX.Element {
  const {email} = props;

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const currentOffers = useAppSelector(() => allOffers.filter((offer) => offer.city.name === currentCity.name));

  useEffect(() => {
    dispatch(fillOffers(allOffers));
  }, [dispatch]);

  const cityChangeHandler = (city: City) => {dispatch(changeCity(city));};

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined> (
    undefined
  );

  const listItemHoverHandler = (id: string) => {
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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">{email}</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
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
              <section className="cities__map map">
                <Map location={currentCity.location} offers={currentOffers} selectedOffer={selectedOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;

