import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {MAX_IMAGES_COUNT, AuthorizationStatus, MAX_RATING} from '../../const';
import {fetchReviewAction, fetchOfferIdAction, fetchNearbyOffersAction} from '../../store/api-action';
import HeaderNav from '../../components/header-nav/header-nav';
import {getOffer, getOffersNearby, getReview} from '../../store/offer-data/selector';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import OffersCardList from '../../components/offers-card-list/offers-card-list';
import Map from '../../components/map/map';

function PropertyScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const offerId = Number(id);
  const reviews = useAppSelector(getReview);
  const offersNearby = useAppSelector(getOffersNearby);
  const offer = useAppSelector(getOffer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    dispatch(fetchReviewAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
    dispatch(fetchOfferIdAction(offerId));
  }, [dispatch, offerId]);

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {images, title, isPremium, type, rating, price, bedrooms, maxAdults, goods, host, description} = offer;
  const {avatarUrl, name, isPro} = host;

  const showRating = `${rating / MAX_RATING * 100}%`;

  return (
    <>
      <Helmet>
        <title>six cities simple: property</title>
      </Helmet>

      <div className="page">
        <div style={{display: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>
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

        <main className="page__main page__main--property">
          <section className="property">

            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_IMAGES_COUNT).map((item) => (
                  <div className="property__image-wrapper" key={item}>
                    <img className="property__image" src={item} alt="Photo studio"/>
                  </div>)
                )}
              </div>
            </div>

            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? (<div className="property__mark"><span>Premium</span></div>) : ''}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                </div>

                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: showRating}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>

                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>)
                    )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                      <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                    {isPro ? (<span className="property__user-status">Pro</span>) : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews} />
                  {isAuth && <CommentForm offerId={offerId} />}
                </section>
              </div>
            </div>
            <Map
              className={'property'}
              city={offer.city}
              offers={[...offersNearby, offer]}
              selectedOffer={offer}
            />
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersCardList
                offers={offersNearby}
                className={'near-places__list places__list'}
                onListItemHover={(evt) => evt}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default PropertyScreen;
