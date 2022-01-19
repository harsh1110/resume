import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProminentAppBar from './components/NavigationBar';
import WelcomePage from './components/WelcomePage';
import IntoPage from './components/IntoPage';
import Education from './components/Education';
import Work from './components/Work';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Seminar from './components/Seminar';
import Refrences from './components/Refrences';
import FeedBack from './components/FeedBack';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProminentAppBar />
        <Routes>
          <Route exact path="/" element={<WelcomePage/> } />
          <Route exact path="/Introduction" element={<IntoPage/> } />
          <Route exact path="/Summary%20Of%20Qualification" element={<Education/> } />
          <Route exact path="/Work%20Experience" element={<Work/> } />
          <Route exact path="/Languages%20Known" element={<Languages/> } />
          <Route exact path="/Skills" element={<Skills/> } />
          <Route exact path="/Cerificates" element={<Certificate/> } />
          <Route exact path="/Seminars" element={<Seminar/> } />
          <Route exact path="/Refrences" element={<Refrences/> } />
          <Route exact path="/Contact%20Me" element={<FeedBack/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
