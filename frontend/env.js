module.exports = {
  ENVIRONMENT: 'development',
  PORT: 8080,
  TEST_API: 'http://localhost:' + process.env.PORT,
  API_HOSTNAME: process.env.API_HOSTNAME || 'http://localhost:8000',
  API_HEROKU: 'hrims.herokuapp.com'
}
