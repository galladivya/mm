// Allows us to use ES6 in our migrations and tests.
module.exports = {
solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 6712388
    }
  }
}
