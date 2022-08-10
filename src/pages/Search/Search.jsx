import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { CommonWrapper } from '../../components/common/commonWrapper';
import Profile from '../../components/atoms/Profile/Profile';
import { searchUserData } from '../../atoms';
import {
  SearchDiv,
  SearchLi,
  SearchP,
  SearchUl,
  SearchWrapper,
} from './searchStyle';

const Search = () => {
  const searchUserDataState = useRecoilValue(searchUserData);
  return (
    <SearchWrapper>
      <CommonWrapper>
        <SearchUl>
          {searchUserDataState.map(searchData => (
            <SearchLi key={searchData._id}>
              <Link to={`/yourProfile/${searchData.accountname}`}>
                <Profile
                  size='42px'
                  imgSrc={searchData.image}
                  imgAlt='프로필 이미지'
                  borderRadius={props => props.theme.borderRadius.circle}
                />
                <SearchDiv>
                  <SearchP>{searchData.username}</SearchP>
                  <SearchP>{`@ ${searchData.accountname}`}</SearchP>
                </SearchDiv>
              </Link>
            </SearchLi>
          ))}
        </SearchUl>
      </CommonWrapper>
    </SearchWrapper>
  );
};

export default Search;
