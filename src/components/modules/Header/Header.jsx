import { useEffect, useState } from 'react';
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import {
  accountnameValue,
  profileImgSrc,
  searchValue,
  userIntroValue,
  usernameValue,
  searchUserData,
  postTxtValue,
  uploadImgSrcArray,
  productNameAtom,
  productPriceAtom,
  productLinkAtom,
  productImgAtom,
  isLogin,
} from '../../../atoms';
import DropUp from '../DropUp/DropUp';
import Modal from '../Modal/Modal';
import { HeaderBox, HeaderWrapper, HeaderSpan } from './style';

const Header = () => {
  const token = localStorage.getItem('token');

  const path = useLocation().pathname;
  const navigate = useNavigate();

  const [searchTxt, setSearchValue] = useRecoilState(searchValue);
  const [accountname, setAccountname] = useRecoilState(accountnameValue);
  const [username, setUsername] = useRecoilState(usernameValue);
  const [userIntro, setIntro] = useRecoilState(userIntroValue);
  const [profileImgSrcValue, setProfileImgSrcValue] =
    useRecoilState(profileImgSrc);
  const setSearchUserDataState = useSetRecoilState(searchUserData);

  const handleButtonClick = () => {
    navigate(-1);
  };

  //상품등록 버튼
  const [productImg, setProductImgSrc] = useRecoilState(productImgAtom);
  const productName = useRecoilValue(productNameAtom);
  const productPrice = useRecoilValue(productPriceAtom);
  const productLink = useRecoilValue(productLinkAtom);

  const onClickPostUploadBtn = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/product',
        {
          product: {
            itemName: productName,
            price: parseInt(productPrice),
            link: productLink,
            itemImage: productImg,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      navigate(`/profile/${accountname}`);
      setProductImgSrc();
    } catch (error) {
      console.log(error);
    }
  };

  // 포스트 업로드 버튼
  const txtValue = useRecoilValue(postTxtValue);
  const uploadMatch = useMatch('/upload');
  const [uploadImgSrc, setUploadImgSrc] = useRecoilState(uploadImgSrcArray);

  const onClickUploadBtn = async e => {
    const images = uploadImgSrc.join(', ');
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/post',
        {
          post: {
            content: txtValue,
            image: images,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      const postId = res.data.post.id;
      navigate(`/post/${postId}`, { replace: true });
      setUploadImgSrc([]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const searchData = async () => {
      try {
        const res = await axios.get(
          `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${searchTxt}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );
        await setSearchUserDataState(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchTxt) {
      searchData();
    } else {
      setSearchUserDataState([]);
    }
  }, [searchTxt]);

  const handleOnSearch = e => {
    setSearchValue(e.target.value);
  };

  const onClickEditSaveBtn = async e => {
    e.preventDefault();
    try {
      const res = await axios.put('https://mandarin.api.weniv.co.kr/user', {
        user: {
          username: username,
          accountname: accountname,
          intro: userIntro,
          image: profileImgSrcValue,
        },
      });
      let data = res.data.user;
      setUsername(data.username);
      setAccountname(data.accountname);
      setIntro(data.intro);
      setProfileImgSrcValue(data.image);
    } catch (error) {
      console.log(error);
    }
    navigate(`/profile/${accountname}`);
  };

  // 포스트 수정 함수
  const postId = useParams();
  const editPostBtn = async e => {
    const images = uploadImgSrc.join(', ');
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/post/${postId}`,
        {
          post: {
            content: txtValue,
            image: images,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      const postId = res.data.post.id;
      navigate(`/post/${postId}`, { replace: true });
      setUploadImgSrc([]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogoutBtn = () => {
    setDropUpShow(true);
  };
  const setIsLogin = useSetRecoilState(isLogin);
  const logoutFunc = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
    navigate('/');
  };
  const [dropUpShow, setDropUpShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {!path.includes('login') ? (
        <>
          <HeaderBox className={path.length === 1 ? 'hide' : null}>
            <HeaderWrapper>
              <Icon
                size='22px'
                xpoint='-236px'
                ypoint='-55px'
                title='뒤로가기 아이콘'
                onClick={handleButtonClick}
              />
              <Input
                className={path.includes('search') ? null : 'hide'}
                type='search'
                placeholder='계정 검색'
                onInput={handleOnSearch}
              />
              <HeaderSpan
                className={
                  path.includes('chat/room') || path.includes('follow')
                    ? null
                    : 'hide'
                }
              >
                {path.includes('chat/room')
                  ? '목동뚜벅초'
                  : path.includes('follower')
                  ? 'Follower'
                  : path.includes('following')
                  ? 'Following'
                  : null}
              </HeaderSpan>
              <Icon
                size='24px'
                xpoint='-54px'
                ypoint='-192px'
                title='비활성화 된 더보기 아이콘'
                className={`right ${
                  path.includes('search') || path.includes('Profile')
                    ? 'hide'
                    : null
                }`}
                onClick={handleLogoutBtn}
              />
              <Button
                label={uploadMatch ? '업로드' : '저장'}
                fontSize='14px'
                fontWeight='500'
                lineHeight='18px'
                padding='7px 0'
                bgColor={props => props.theme.color.main.subGreen}
                txtColor={props => props.theme.color.text.white}
                borderRadius='32px'
                className={`btn_header + ${
                  path.includes('upload') ||
                  path.includes('edit') ||
                  path.includes('addProduct')
                    ? 'show'
                    : null
                } + ${
                  productImg && productName && productLink && productPrice
                    ? 'btn_next'
                    : null
                } + ${txtValue && uploadImgSrc ? 'btn_next' : null}
                + ${accountname && username && userIntro ? 'btn_next' : null}`}
                onClick={
                  uploadMatch
                    ? onClickUploadBtn
                    : path.includes('upload')
                    ? editPostBtn
                    : path.includes('edit')
                    ? onClickEditSaveBtn
                    : path.includes('addProduct')
                    ? onClickPostUploadBtn
                    : null
                }
              />
            </HeaderWrapper>
          </HeaderBox>

          <HeaderBox className={path.length === 1 ? null : 'hide'}>
            <HeaderWrapper>
              <HeaderSpan className={path.length === 1 ? '' : 'hide'}>
                초풀마켓 피드
              </HeaderSpan>

              <Icon
                to='/search'
                size='24px'
                xpoint='-98px'
                ypoint='-192px'
                title='검색 아이콘'
                className={'right'}
                isLink
              />
            </HeaderWrapper>
          </HeaderBox>
          <div className={dropUpShow ? null : 'hide'}>
            <DropUp
              menu={['설정 및 개인정보', '로그아웃']}
              setModalShow={setModalShow}
              setDropUpShow={setDropUpShow}
            />
          </div>
          <div className={modalShow ? null : 'hide'}>
            <Modal
              title='로그아웃 하시겠어요?😭'
              btnLeft='로그아웃'
              btnRight='취소'
              setModalShow={setModalShow}
              excutfunc={logoutFunc}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
