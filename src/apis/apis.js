import axios from 'axios';

const API_URL = 'https://api.mandarin.weniv.co.kr/';

// uploadImg Function
export const uploadImg = async imgFile => {
  let formData = new FormData();
  formData.append('image', imgFile);
  try {
    const res = await axios.post(`${API_URL}image/uploadfile`, formData);
    return `${API_URL}${res.data.filename}`;
  } catch (error) {
    console.log(error);
  }
};

// getProductData Function
export const getProductData = async (id, token) => {
  try {
    const res = await axios.get(`${API_URL}product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.product;
  } catch (error) {
    console.log(error);
  }
};

// getMyPostData Function
export const getMyPostData = async (id, token) => {
  try {
    const res = await axios.get(`${API_URL}post/${id}/userpost`, {
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

// getPostData by ID Function
export const getPostDetailDataAxios = async (id, token) => {
  try {
    const res = await axios.get(`${API_URL}post/${id}`, {
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
    const res = await axios.get(`${API_URL}post/feed/?limit=${parseInt(20)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.posts;
  } catch (error) {
    console.log(error);
  }
};

// removePost Function
export const removePostAxios = async (token, postId) => {
  try {
    await axios.delete(`${API_URL}post/${postId}/`, {
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
    const res = await axios.get(`${API_URL}user/myinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};

// getProfile by ID Function
export const getYourprofile = async (id, token) => {
  try {
    const res = await axios.get(`${API_URL}profile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.profile;
  } catch (error) {
    console.log(error);
  }
};

// like Function
export const likeAxios = async (id, token) => {
  try {
    const res = await axios.post(
      `${API_URL}post/${id}/heart`,
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
    const res = await axios.delete(`${API_URL}post/${id}/unheart`, {
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

// follow Function
export const followAxios = async (id, token) => {
  try {
    const res = await axios.post(
      `${API_URL}profile/${id}/follow`,
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
    const res = await axios.delete(`${API_URL}profile/${id}/unfollow`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.profile;
  } catch (error) {
    console.log(error);
  }
};

// getFollowingData Function
export const getFollowingDataAxios = async (id, token) => {
  try {
    const res = await axios.get(
      `${API_URL}profile/${id}/following/?limit=${parseInt(20)}`,
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
      `${API_URL}profile/${id}/follower/?limit=${parseInt(20)}`,
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
    const res = await axios.post(`${API_URL}user/login`, {
      user: {
        email: emailID,
        password: pwdValue,
      },
    });
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
    await axios.post(`${API_URL}user`, {
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
    const res = await axios.post(`${API_URL}user/emailvalid`, {
      user: {
        email: emailID,
      },
    });
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
};

// accountnameValidate Function
export const accountnameValidateAxios = async accountname => {
  try {
    const res = await axios.post(`${API_URL}user/accountnamevalid`, {
      user: {
        accountname: accountname,
      },
    });
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
};
