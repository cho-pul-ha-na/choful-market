import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import EmailLogin from './pages/EmailLogin/EmailLogin';
import EmailSignUp from './pages/EmailSignUp/EmailSignUp';
import Home from './pages/Home/Home';
import SNSLogin from './pages/SNSLogin/SNSLogin';
import MyProfile from './pages/MyProfile/MyProfile';
import MyProfileAddProduct from './pages/MyProfileAddProduct/MyProfileAddProduct';
import PostUpload from './pages/PostUpload/PostUpload';
import Search from './pages/Search/Search';
import SetProfile from './pages/SetProfile/SetProfile';
import YourProfile from './pages/YourProfile/YourProfile';
import Header from './components/modules/Header/Header';
import Nav from './components/modules/Nav/Nav';
import MyProfileEdit from './pages/MyProfileEdit/MyProfileEdit';
import PostDetail from './pages/PostDetail/PostDetail';
import Followers from './pages/Followers/Followers';
import { useRecoilState } from 'recoil';
import { isLogin } from './atoms';
import { useEffect } from 'react';

function App() {
  const token = localStorage.getItem('token');

  const [isLoginState, setIsLoginState] = useRecoilState(isLogin);

  setIsLoginState(() => {
    return token ? true : false;
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            isLoginState ? <Home /> : <Navigate replace={true} to='/login' />
          }
        />
        <Route path='/login' element={<SNSLogin />} />
        <Route path='/login/email' element={<EmailLogin />} />
        <Route path='/login/signUp' element={<EmailSignUp />} />
        <Route path='/login/setProfile' element={<SetProfile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/yourProfile/:id' element={<YourProfile />} />
        <Route
          path='/profile/:id'
          element={
            isLoginState ? (
              <MyProfile />
            ) : (
              <Navigate replace={true} to='/login' />
            )
          }
        />
        <Route path='/profile/:id/edit' element={<MyProfileEdit />} />
        <Route path='/profile/:id/follower' element={<Followers />} />
        <Route path='/profile/:id/following' element={<Followers />} />
        <Route
          path='/profile/:id/addProduct'
          element={<MyProfileAddProduct />}
        />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route
          path='/upload/'
          element={
            isLoginState ? (
              <PostUpload />
            ) : (
              <Navigate replace={true} to='/login' />
            )
          }
        />
        <Route
          path='/upload/:postId'
          element={
            isLoginState ? (
              <PostUpload />
            ) : (
              <Navigate replace={true} to='/login' />
            )
          }
        />
        <Route path='/chat/list' element={<ChatList />} />
        <Route path='/chat/room' element={<ChatRoom />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
