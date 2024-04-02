const { defineconfig } = require('@playwright/test');

module.exports = defineconfig({
  testDir: './tests',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
  ],
  reporter:'html'
});