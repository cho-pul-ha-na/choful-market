import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { CommonWrapper } from '../../components/common/commonWrapper';
import Profile from '../../components/atoms/Profile/Profile';
import { searchUserData } from '../../atoms';
import * as S from './style';

const Search = () => {
  const searchUserDataState = useRecoilValue(searchUserData);
  return (
    <S.SearchWrapper>
      <CommonWrapper>
        <S.SearchUl>
          {searchUserDataState.map(searchData => (
            <S.SearchLi key={searchData._id}>
              <Link to={`/yourProfile/${searchData.accountname}`}>
                <Profile
                  size='42px'
                  imgSrc={searchData.image}
                  imgAlt='프로필 이미지'
                  borderRadius={props => props.theme.borderRadius.circle}
                />
                <S.SearchDiv>
                  <S.SearchP>{searchData.username}</S.SearchP>
                  <S.SearchP>{`@ ${searchData.accountname}`}</S.SearchP>
                </S.SearchDiv>
              </Link>
            </S.SearchLi>
          ))}
        </S.SearchUl>
      </CommonWrapper>
    </S.SearchWrapper>
  );
};

export default Search;
