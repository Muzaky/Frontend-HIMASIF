module.exports = {
    apps: [
      {
        name: 'vue-app',
        script: './node_modules/@vue/cli-service/bin/vue-cli-service.js',
        args: 'serve',
        env: {
          NODE_ENV: 'production',
          PORT: 80, // Set port 80
          HOST: '0.0.0.0', // Allow external access
        },
      },
    ],
  };