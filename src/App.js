import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout/layout.component'
import Home from './routes/Home/home.component';
import SignIn from './routes/SignIn/signIn.component';
import SignUp from './routes/SignUp/signUp.component';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Profile from './routes/Profile/Profile.component';
import PublishEvent from './routes/PublishEvent/PublishEvent.component';


function App() {
  return (
    <div className="App">
       <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='sign-in' element={<SignIn/>} />
          <Route path='sign-up' element={<SignUp/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='publish-event' element={<PublishEvent/>} />
        </Route>
      </Routes>
            <ToastContainer />
    </div>
  );
}

export default App;
