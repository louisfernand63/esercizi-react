/*import logo from './logo.svg';*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <MyNav />
      <Container className="my-5">
        <Welcome />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
