import axios from 'axios'

// URL BASE
const api = axios.create({
  baseURL:'https://swapi.co/api/'
})

const loginApi = axios.create({
    baseURL: 'https://api-demo.daniel-avellaneda.com/'
})

var header = {
    "Content-Type": "application/json",
}
var signupHeader = {
    "Content-Type": "application/json",
    "Accept-Language": "en"
  }

const apis = {
  login:(data) => loginApi.post(`login`, data, header),
  signup:(data) => loginApi.post(`register`, data, signupHeader),
  getPeople: () => api.get(`people`),
  getFilms: () => api.get(`films`),
  getPlanets: () => api.get(`planets`),
  getSpecies: () => api.get(`species`),
  getStarships: () => api.get(`starships`),
  getVehicles: () => api.get(`vehicles`),
    
}


export default apis