import { ProfileImg } from './style';

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
