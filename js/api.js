import {showErrorForm, dataErrorPicture} from './util';

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

const getData = () => load(Route.GET_DATA, dataErrorPicture);

const sendData = (body) => load(Route.SEND_DATA,showErrorForm, Method.POST, body);

export {getData, sendData};
