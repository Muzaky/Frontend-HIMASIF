module.exports = {
    apps: [
      {
        name: 'nuxt-app', // Application name
        script: '.output/server/index.mjs', // Entry point of your Nuxt app
        exec_mode: 'cluster', // Optional: Enables clustering for better performance
        instances: 'max', // Optional: Scales based on available CPU cores
        env: {
          NODE_ENV: 'production', // Set environment to production
          NITRO_PORT: 80, // Serve on port 80
        },
      },
    ],
  };