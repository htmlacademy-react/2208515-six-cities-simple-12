import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import UserNotAuth from '../user-not-auth/user-not-auth';
import UserAuth from '../user-auth/user-auth';
import {getAuthorizationStatus, getUserInfo} from '../../store/user-process/selectors';

function HeaderNav (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserInfo);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      {isAuth && userData ? <UserAuth userInfo = {userData} /> : <UserNotAuth />}
    </nav>
  );
}

export default HeaderNav;
