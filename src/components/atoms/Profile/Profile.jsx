import styled from 'styled-components';

const ProfileImg = styled.img`
    width: ${props => props.size};
    height: ${props => props.size};
`;

const Profile = ({ size, imgSrc, imgAlt }) => {
    return <ProfileImg size={size} src={imgSrc} alt={imgAlt}></ProfileImg>
};

export default Profile;