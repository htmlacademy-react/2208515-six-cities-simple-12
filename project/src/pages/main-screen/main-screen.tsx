import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {City, Offer} from '../../types/offer';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import HeaderNav from '../../components/header-nav/header-nav';
import {getOffers} from '../../store/offer-data/selector';
import {getCity} from '../../store/offers-process/selector';
import {changeCity} from '../../store/offers-process/offers-process';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import MainNotEmptyScreen from '../main-not-empty-screen/main-not-empty-screen';

function MainScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentOffers = useAppSelector(() => offers.filter((offer) => offer.city.name === currentCity.name));

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined> (
    undefined
  );

  const handleCityChange = (city: City) => {dispatch(changeCity(city));};

  const handleListItemHover = (id: number) => {
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
              <Logo />
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList city={currentCity} onCityClick={handleCityChange}/>
          </section>
        </div>
        <div className="cities">
          {
            !offers ?
              <MainEmptyScreen currentCity = {currentCity} /> :
              <MainNotEmptyScreen
                offers={currentOffers}
                currentCity={currentCity}
                city={currentCity}
                selectedOffer={selectedOffer}
                onListItemHover={handleListItemHover}
              />
          }
        </div>
      </main>
    </>
  );
}

export default MainScreen;
