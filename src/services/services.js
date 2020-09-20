
import axios from 'axios';
import {config} from '../constants'
const baseUrl = config.CORS_PROXY + config.SERVER_BASE_URL;
export const getDaynamicGetData = async (endPoint, id) => {
    return await fetch(baseUrl + endPoint + '?id=' + id )
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        return false;
      });
  };
export const getDaynamicPostData = async (endPoint, formData) => {
   
    const encodeForm = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
        )
        .join('&');
    };
    return axios
      .post(baseUrl + '/' + endPoint, encodeForm(formData))
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  };
export const getCategory = async () => {
  return await fetch(baseUrl + '/getcategory')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return false;
    });
};
export const getAlbumService = async () => {
    return await fetch(baseUrl + '/getVideoByalbumeId')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        return false;
      });
  };

export const placeOrder = async (formData) => {
  const encodeForm = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };
  return axios
    .post(baseUrl + '/saveOrder', encodeForm(formData), {
      headers: {Accept: 'application/json'},
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

export const getUserData =  () => {
  if(localStorage.getItem("userDetails")){
   const userDetails= localStorage.getItem("userDetails");
   return JSON.parse(userDetails)
  }else{
    return false
  }
};


