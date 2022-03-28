import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainHome from './mainHome';
import AddNewPage from './addnewPage/addnewPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome/>}/>
          <Route path="/add" element={<AddNewPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
