const defaultEnv = {
  googleApiKey: 'AIzaSyAV0MdFUWuH6sDJRg_5KdwKMtrpdVKjo6c'
};
const devEnv = {};

const prodEnv = {};

const env =
  process.env.NODE_ENV === 'production'
    ? { ...defaultEnv, ...prodEnv }
    : { ...defaultEnv, ...devEnv };

export default env;
