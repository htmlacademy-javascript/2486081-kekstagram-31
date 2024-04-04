import {showErrorForm, showDataErrorPicture} from './show-alerts';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, error, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`,{method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(error());
    });

const sendCorrectAttributes = () => {
  const formElement = document.querySelector('.img-filters__form');
  formElement.action = 'https://31.javascript.htmlacademy.pro/kekstagram';
  formElement.method = 'POST';
  formElement.enctype = 'multipart/form-data';
};


const getData = () => load(Route.GET_DATA, showDataErrorPicture);

const sendData = (body) => load(Route.SEND_DATA,showErrorForm, Method.POST, body);

export {getData, sendData, sendCorrectAttributes};
