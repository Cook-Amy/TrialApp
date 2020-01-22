module.exports = {
  apps: [{
    name: 'trialApp',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-225-5-189.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/trialApp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Cook-Amy/TrialApp.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}