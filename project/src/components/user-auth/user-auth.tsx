import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {UserData} from '../../types/user-data';
import {logoutAction} from '../../store/api-action';

type UserAuthProps = {
  userInfo: UserData;
}

function UserAuth (props: UserAuthProps): JSX.Element {
  const {userInfo} = props;
  const dispatch = useAppDispatch();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userInfo.email}</span>
        </div>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to="/"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default UserAuth;
