import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  plasesCount: number;
  email: string;
}

function App({plasesCount, email}: AppScreenProps): JSX.Element {
  return (
    <MainScreen plasesCount={plasesCount} email={email} />
  );
}

export default App;
