module.exports = {
  ENVIRONMENT: 'development',
  PORT: 8080,
  TEST_API: 'http://localhost:' + process.env.PORT,
  API_HOSTNAME: process.env.API_HOSTNAME || 'https://hrims.herokuapp.com'
}
