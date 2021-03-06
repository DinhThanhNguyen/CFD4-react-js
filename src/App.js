import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './assets/css/Style.scss';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import PopupLogin from './components/popupLogin';
import PopupRegister from './components/popupRegister'
import Team from './pages/team';
import Payments from './pages/thanh-toan';
import Profile from './pages/profile';
import Course from './pages/khoa-hoc';
import Register from'./pages/register';
import Project from './pages/project';
import Contact from './pages/hop-tac';
import Coin from './pages/coin';
import Email from './pages/email';
import Page404 from './pages/404-page';
import Faq from './pages/faq';
import CourseDetail from './pages/course-detail';
import Loading from './components/Loading';
import React, { useRef } from 'react';
import AuthProvider from './core/hook/useLogin';
import PrivateRoute from './core/PrivateRoute';


export const context = React.createContext({});

function App() {
  let refLogin = useRef();

  let refRegister = useRef();

  function openPopupLogin() {
    refLogin.current.style.display = 'flex'
  }
  function closePopupLogin() {
    refLogin.current.style.display = 'none'
  }
  function openPopupRegister() {
    refRegister.current.style.display = 'flex'
  }
  function closePopupRegister() {
    refRegister.current.style.display = 'none'
  }
  return <AuthProvider>
    <context.Provider value={{ openPopupLogin, closePopupLogin, openPopupRegister, closePopupRegister }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/khoa-hoc" component={Course} />
          <PrivateRoute path="/thong-tin-ca-nhan" component={Profile} />
          <Route path="/thanh-toan" component={Payments} />
          <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
          <Route path="/team" component={Team} />
          <PrivateRoute path="/dang-ky/:slug" component={Register} />
          <PrivateRoute path="/du-an" component={Project} />
          <Route path="/lien-he" component={Contact} />
          <Route path="/coin" component={Coin} />
          <Route path="/email" component={Email} />
          <Route path="/faq" component={Faq} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Page404} />
        </Switch>
        <Footer />
        <PopupLogin ref={refLogin} />
        <PopupRegister ref={refRegister} />
        <Loading />
      </BrowserRouter>
    </context.Provider>
  </AuthProvider>
}

export default App;
