import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout/layout.component'
import Home from './routes/Home/home.component';
import SignIn from './routes/SignIn/signIn.component';
import SignUp from './routes/SignUp/signUp.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='sign-in' element={<SignIn/>} />
          <Route path='sign-up' element={<SignUp/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
