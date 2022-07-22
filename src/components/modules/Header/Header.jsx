import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { CommonWrapper } from '../../common/commonWrapper';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  accountnameValue,
  profileImgSrc,
  searchValue,
  userDataAtom,
  userIntroValue,
  usernameValue,
  searchUserData,
} from '../../../atoms';
import { useEffect } from 'react';

const HeaderBox = styled.header`
  width: 100%;
  border-bottom: 0.5px solid ${props => props.theme.color.gray.d2};
  background-color: white;
  z-index: 10;
  &.hide {
    display: none;
  }
`;

const HeaderWrapper = styled(CommonWrapper)`
  height: 48px;
  padding: 8px 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const HeaderSpan = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  background-color: inherit;
`;

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
      console.log(res);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    navigate('/profile/:id');
  };

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
                className={path.includes('chat/room') ? null : 'hide'}
              >
                도촌동풀벌레 찌르찌르
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
              />
              <Button
                label={path.includes('upload') ? '업로드' : '저장'}
                fontSize='14px'
                fontWeight='500'
                lineHeight='18px'
                padding='7px 0'
                bgColor={props => props.theme.color.main.green}
                txtColor={props => props.theme.color.text.white}
                borderRadius='32px'
                className={`btn_header + ${
                  path.includes('upload') ||
                  path.includes('edit') ||
                  path.includes('addProduct')
                    ? 'show'
                    : null
                }`}
                onClick={path.includes('edit') ? onClickEditSaveBtn : null}
              />
            </HeaderWrapper>
          </HeaderBox>

          <HeaderBox className={path.length === 1 ? null : 'hide'}>
            <HeaderWrapper>
              <HeaderSpan className={path.length === 1 ? '' : 'hide'}>
                초풀마켓 피드
              </HeaderSpan>
              <HeaderSpan
                className={path.includes('chat/room') ? null : 'hide'}
              >
                {/* 여기에 채팅하는 상대방 유저아이디 */}
                도촌동풀벌레 찌르찌르
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
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
