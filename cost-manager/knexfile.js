// Update with your config settings.

module.exports = {

    test:{
      client:"pg",
      connection:'postgres://localhost/flights',
    },
    development:{
      client:"pg",
      connection:'postgres://localhost/flights'
    },
    production:{
      client:"pg",
      connection: process.env.DATABASE_URL
    }

};
