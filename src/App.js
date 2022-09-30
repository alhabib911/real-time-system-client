import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Photos from './Component/Photos/Photos';
import Post from './Component/Post/Post';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/photos' element={<Photos/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
