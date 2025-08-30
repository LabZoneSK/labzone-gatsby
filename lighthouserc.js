// lighthouserc.js
require('dotenv').config()

module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run build && npm run serve',
            url: ['http://localhost:9000/'],
            startServerReadyPattern: 'http://localhost:9000/',
            startServerReadyTimeout: 20000, // milliseconds
            numberOfRuns: 3,
        },
        /* assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
      },
    },*/
        upload: {
            target: 'lhci',
            serverBaseUrl: 'https://frozen-cove-22680.herokuapp.com/',
            token: '76f3530f-070f-4fb2-b8e0-52f7b54aef54',
        },
    },
}
