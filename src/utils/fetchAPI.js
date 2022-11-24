import axios from 'axios'

// const BASE_URL = 'https://youtube-music1.p.rapidapi.com/v2'

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: '48',
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com',
//   },
// }

// export const fetchAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options)

//   return data
// }

const BASE_URL = 'https://shazam.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '48',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
}

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
