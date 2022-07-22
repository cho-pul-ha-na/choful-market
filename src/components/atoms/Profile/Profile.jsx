import styled from 'styled-components';

const ProfileImg = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.borderRadius};
`;

const Profile = ({ size, imgSrc, imgAlt, borderRadius, ...props }) => {
  return (
    <ProfileImg
      size={size}
      src={imgSrc}
      alt={imgAlt}
      borderRadius={borderRadius}
      {...props}
    ></ProfileImg>
  );
};

export default Profile;
