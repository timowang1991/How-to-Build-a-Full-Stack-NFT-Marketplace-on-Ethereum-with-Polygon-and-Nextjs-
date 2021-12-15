const {
  BLOCKCHAIN_ENV
} = process.env;

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BLOCKCHAIN_ENV,
  }
}
