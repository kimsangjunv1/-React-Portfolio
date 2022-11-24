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

// 야후 날씨
const BASE_URL_WEATHER = 'https://yahoo-weather5.p.rapidapi.com'

const options_weather = {
  url: BASE_URL_WEATHER,
  params: { location: 'sunnyvale', format: 'json', u: 'f' },
  headers: {
    'X-RapidAPI-Key': '03baac2a66mshcd4a23b0410de5ep115e6ejsncfbb7dec4eed',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
  },
}

export const fetchAPIs = async (url) => {
  const { data_weather } = await axios.get(
    `${BASE_URL_WEATHER}/${url}`,
    options_weather
  )

  return data_weather
}

// 유튜브
const BASE_URL_YOUTUBE = 'https://yahoo-weather5.p.rapidapi.com'

const options_youtube = {
  url: 'https://youtube138.p.rapidapi.com/search/',
  params: { q: '겨울 playlist', hl: 'ko', gl: 'KR' },
  headers: {
    'X-RapidAPI-Key': '03baac2a66mshcd4a23b0410de5ep115e6ejsncfbb7dec4eed',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
}

export const fetchAPIyt = async (url) => {
  const { data_youtube } = await axios.get(
    `${BASE_URL_YOUTUBE}/${url}`,
    options_youtube
  )

  return data_youtube
}
