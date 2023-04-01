import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';

function NotFoundScreen (): JSX.Element {
  return (
    <>
      <Helmet>
        <title>six cities simple: not found</title>
      </Helmet>
      <Logo />
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default NotFoundScreen;
