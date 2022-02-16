import axios from 'axios'

let API_URL = 'https://character-9a251-default-rtdb.firebaseio.com/weapons.json'

export const getWeapons = () => {
  return axios.get(API_URL)
    .then(res => res.data)
    .catch(err => err)
}
