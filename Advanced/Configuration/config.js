module.exports = {
  baseURL: 'https://www.amazon.in/',
  credentials: {
    username: 'your_username',
    password: 'your_password'
  },
  timeouts: {
    pageLoad: 70000, // 70 seconds
    elementWait: 30000, // 30 seconds
    action: 10000 // 10 seconds
  },
  viewport: {
    width: 1280,
    height: 720
  },
  headless: false,
  browserType: 'chromium',
  logging: {
    enable: true,
    level: 'debug'
  },
  apiURLs: {
    users: 'https://api.example.com/users',
    products: 'https://api.example.com/products'
  }
};
