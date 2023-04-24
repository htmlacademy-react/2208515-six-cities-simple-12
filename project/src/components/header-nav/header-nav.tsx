import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import UserNotAuth from '../user-not-auth/user-not-auth';
import UserAuth from '../user-auth/user-auth';

function HeaderNav (): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userInfo);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      {isAuth && userData ? <UserAuth userInfo = {userData} /> : <UserNotAuth />}
    </nav>
  );
}

export default HeaderNav;
