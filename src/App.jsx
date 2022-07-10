import { Route, Routes } from 'react-router-dom';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import EmailLogin from './pages/EmailLogin';
import EmailSignUp from './pages/EmailSignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyProfileAddProduct from './pages/MyProfileAddProduct';
import MyProfileModification from './pages/MyProfileModification';
import Post from './pages/Post';
import PostUpload from './pages/PostUpload';
import Search from './pages/Search';
import SetProfile from './pages/SetProfile';
import YourProfile from './pages/YourProfile';
import Header from './components/modules/Header/Header';
import Nav from './components/modules/Nav/Nav'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/email" element={<EmailLogin />} />
        <Route path="/login/signUp" element={<EmailSignUp />} />
        <Route path="/login/setProfile" element={<SetProfile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/yourProfile/:id" element={<YourProfile />} />
        <Route path="/myProfile/:id" element={<MyProfile />} />
        <Route
          path="/myProfile/:id/modification"
          element={<MyProfileModification />}
          />
        <Route
          path="/myProfile/:id/addProduct"
          element={<MyProfileAddProduct />}
          />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/upload" element={<PostUpload />} />
        <Route path="/chat/list" element={<ChatList />} />
        <Route path="/chat/room" element={<ChatRoom />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
