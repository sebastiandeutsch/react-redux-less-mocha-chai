const Config = {
  development: {
    apiUrl: 'http://localhost:4730'
  },
  devserver: {
    apiUrl: 'http://localhost:4730'
  },
  integration: {
    apiUrl: 'http://localhost:4730'
  },
  pilot: {
    apiUrl: 'http://localhost:4730'
  },
  prod: {
    apiUrl: 'http://localhost:4730'
  },
  test: {
    apiUrl: 'http://localhost:4730'
  }
};

export default Config[__ENVIRONMENT__];
