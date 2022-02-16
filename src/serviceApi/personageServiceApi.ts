import axios from 'axios'
import { IPersonage } from '../models/Personage'

let API_URL = 'https://character-9a251-default-rtdb.firebaseio.com/characs.json'

export const createPersonage = (charac: IPersonage) => {
  return axios.post(API_URL, charac)
    .then(res => res.data)
    .catch(err => err)
}

export const getPersonages = () => {
  return axios.get(API_URL)
    .then(res => res.data)
    .catch(err => err)
}
