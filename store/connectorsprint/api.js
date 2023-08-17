import axios from "axios"
const connectorsprint = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/109760/connectors",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
