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
import Team from './pages/team';
import Payments from './pages/thanh-toan';
import Profile from './pages/profile';
import Course from './pages/khoa-hoc';
import Register from './pages/register';
import Project from './pages/project';
import Collaborate from './pages/hop-tac';
import Coin from './pages/coin';
import Email from './pages/email';
import Error from './pages/404-page';
import Faq from './pages/faq';
import CourseDetail from './pages/course-detail';
import Loading from './components/Loading';
function App() {
  return <BrowserRouter>
  <Header />
  <Switch>
  <Route path="/khoa-hoc"><Course /></Route>
  <Route path="/thong-tin-ca-nhan"><Profile /></Route>
  <Route path="/lich-su-thanh-toan"><Payments /></Route>
  <Route path="/chi-tiet-khoa-hoc"><CourseDetail /></Route>
  <Route path="/team"><Team /></Route>
  <Route path="/dang-ky"><Register /></Route>
  <Route path="/du-an"><Project /></Route>
  <Route path="/hop-tac"><Collaborate /></Route>
  <Route path="/coin"><Coin /></Route>
  <Route path="/email"><Email /></Route>
  <Route path="/faq"><Faq /></Route>
  <Route path="/" exact><Home /></Route>
  <Route><Error /></Route>
  </Switch>
  <Footer />
  <PopupLogin />
  <Loading />
  </BrowserRouter>
}

export default App;
