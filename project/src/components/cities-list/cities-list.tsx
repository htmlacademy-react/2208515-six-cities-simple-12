import {City} from '../../types/offer';
import {CITIES} from '../../const';
import {Link} from 'react-router-dom';

type CitiesListProps = {
  city: City;
  onCityClick: (city: City) => void;
}

function CitiesList ({city, onCityClick}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((CITY) => (
        <li key={`${CITY.name}`} className="locations__item">
          <Link className={`locations__item-link tabs__item ${city.name === CITY.name ? 'tabs__item--active' : ''}`}
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              onCityClick(CITY);
            }}
          >
            <span>{CITY.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
