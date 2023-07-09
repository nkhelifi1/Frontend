require('jest-fetch-mock').enableMocks()
require('dotenv').config()
process.env.VUE_APP_BACKEND_BASE_URL= 'http://localhost:8080';