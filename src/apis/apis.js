import axios from 'axios';

// uploadImg Function
export const uploadImg = async imgFile => {
  let formData = new FormData();
  formData.append('image', imgFile);
  try {
    const res = await axios.post(
      `https://mandarin.api.weniv.co.kr/image/uploadfile`,
      formData,
    );
    return `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
  } catch (error) {
    console.log(error);
  }
};

// getProductData Function
export const getProductData = async (id, token) => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/product/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.product;
  } catch (error) {
    console.log(error);
  }
};

// getMyPostData Function
export const getMyPostData = async (id, token) => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/post/${id}/userpost`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.post;
  } catch (error) {
    console.log(error);
  }
};

// getPostData by ID Function
export const getPostDetailDataAxios = async (id, token) => {
  try {
    const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.post;
  } catch (error) {
    console.log(error);
  }
};

// getFeedPostData Function
export const getFeedPostDataAxios = async token => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/post/feed/?limit=${parseInt(20)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.posts;
  } catch (error) {
    console.log(error);
  }
};

// removePost Function
export const removePostAxios = async (token, postId) => {
  try {
    await axios.delete(`https://mandarin.api.weniv.co.kr/post/${postId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// getMyprofile Function
export const getMyprofile = async token => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/user/myinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};

// getProfile by ID Function
export const getYourprofile = async (id, token) => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.profile;
  } catch (error) {
    console.log(error);
  }
};

// like Function
export const likeAxios = async (id, token) => {
  try {
    const res = await axios.post(
      `https://mandarin.api.weniv.co.kr/post/${id}/heart`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.post;
  } catch (error) {
    console.log(error);
  }
};

// unlike Function
export const unlikeAxios = async (id, token) => {
  try {
    const res = await axios.delete(
      `https://mandarin.api.weniv.co.kr/post/${id}/unheart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.post;
  } catch (error) {
    console.log(error);
  }
};

// follow Function
export const followAxios = async (id, token) => {
  try {
    const res = await axios.post(
      `https://mandarin.api.weniv.co.kr/profile/${id}/follow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.profile;
  } catch (error) {
    console.log(error);
  }
};

// unfollow Function
export const unfollowAxios = async (id, token) => {
  try {
    const res = await axios.delete(
      `https://mandarin.api.weniv.co.kr/profile/${id}/unfollow`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data.profile;
  } catch (error) {
    console.log(error);
  }
};

// getFollowingData Function
export const getFollowingDataAxios = async (id, token) => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/profile/${id}/following/?limit=${parseInt(
        20,
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// getFollowerData Function
export const getFollowerDataAxios = async (id, token) => {
  try {
    const res = await axios.get(
      `https://mandarin.api.weniv.co.kr/profile/${id}/follower/?limit=${parseInt(
        20,
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// login Function
export const loginAxios = async (emailID, pwdValue) => {
  try {
    const res = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/login',
      {
        user: {
          email: emailID,
          password: pwdValue,
        },
      },
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// signUp Function
export const signUpAxios = async (
  username,
  emailValue,
  pwdValue,
  accountname,
  userIntro,
  profileImgSrcValue,
) => {
  try {
    await axios.post('https://mandarin.api.weniv.co.kr/user', {
      user: {
        username: username,
        email: emailValue,
        password: pwdValue,
        accountname: accountname,
        intro: userIntro,
        image: profileImgSrcValue,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// emailValidate Function
export const emailValidateAxios = async emailID => {
  try {
    const res = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/emailvalid',
      {
        user: {
          email: emailID,
        },
      },
    );
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
};

// accountnameValidate Function
export const accountnameValidateAxios = async accountname => {
  try {
    const res = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/accountnamevalid',
      {
        user: {
          accountname: accountname,
        },
      },
    );
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
};
