/*import logo from './logo.svg';*/
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';

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

