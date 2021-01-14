import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import PopupLogin from './components/popupLogin';
import Team from './pages/team';
import Payments from './pages/thanh-toan';
import Register from './pages/register';
import Project from './pages/project';
import Collaborate from './pages/hop-tac';
import Coin from './pages/coin';
import Email from './pages/email';
import Error from './pages/404-page';
import Faq from './pages/faq';

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Course /> */}
      {/* <Profile /> */}
      {/* <Team /> */}
      {/* <Payments /> */}
      {/* <Register /> */}
      {/* <Project /> */}
      {/* <Collaborate /> */}
      {/* <Coin /> */}
      {/* <Email /> */}
      {/* <Error /> */}
      {/* <Faq /> */}
      <Footer />
      <PopupLogin />
    </>
  );
}

export default App;
