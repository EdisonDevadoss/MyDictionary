const defaultEnv = {
  searchUrl: 'https://googledictionaryapi.eu-gb.mybluemix.net/?define='
};
const devEnv = {};

const prodEnv = {};

const env =
  process.env.NODE_ENV === 'production'
    ? { ...defaultEnv, ...prodEnv }
    : { ...defaultEnv, ...devEnv };

export default env;
