// import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


const env = process.env.NODE_ENV; // 'development' or 'test'
export const client_url = process.env.CLIENT_URL;

const development = {
  app: {
    app_port: parseInt(process.env.DEV_APP_PORT)
    // endpoint: process.env.API_URL
  },
  db: {
    db_url: process.env.DEV_DB_URL,
    db_host: process.env.DEV_DB_HOST || 'localhost',
    db_port: parseInt(process.env.DEV_DB_PORT) || 27017,
    db_name: process.env.DEV_DB_NAME || 'db'
  }
}

const test = {
  app: {
    app_port: parseInt(process.env.TEST_APP_PORT) || 3000
    // endpoint: process.env.API_URL
  },
  db: {
    db_url: process.env.TEST_DB_URL || 'localhost:27017',
    db_host: process.env.TEST_DB_HOST || 'localhost',
    db_port: parseInt(process.env.TEST_DB_PORT) || 27017,
    db_name: process.env.TEST_DB_NAME || 'test'
  }
}

const configs = {
  development,
  test
};

let envConfig;
if (env === 'development') envConfig = configs.development;
if (env === 'test') envConfig = configs.test;

// const config = configs.env
export { envConfig };