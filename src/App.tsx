import './style/index.scss';
import Landing from './pages/landing';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/notFound';

function App() {

  return (
    <div className="container">
      <div className="container__subcontainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="articles" element={<></>}>
                <Route path=":name" element={<></>} />
                <Route path="*" element={<NotFound />} />                         
              </Route>
            </Route> 
            <Route path="*" element={<NotFound />} />           
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
