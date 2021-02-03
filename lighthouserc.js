// lighthouserc.js
require("dotenv").config()

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run build && npm run serve",
      url: ["http://localhost:9000/"],
      startServerReadyPattern: "Server is running on PORT 9000",
      startServerReadyTimeout: 20000, // milliseconds
      numberOfRuns: 5,
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
