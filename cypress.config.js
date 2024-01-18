const { defineConfig } = require('cypress');
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const reporter = configureAllureAdapterPlugins(on, config);

      on('before:run', (details) => {
        reporter?.writeEnvironmentInfo({
          info: {
            os: details.system.osName,
            osVersion: details.system.osVersion,
          },
        });
      });

      on('after:spec', async (spec, results) => {
        // your code in after spec
        await reporter.afterSpec({ results });
      });

      getCompareSnapshotsPlugin(on, config);

      return config;
    },
    baseUrl: 'https://caminv-dev-merc.mef.gov.kh',
    defaultCommandTimeout: 1000,
    video: true,
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1200,
    viewportHeight: 720,
    env: {
      allure: true,
      // allureCleanResults: true,
      allureSkipCommands: 'wrap',
      allureResults: './allure-results',
      token:
        'eyJhbGciOiJTSEE1MTJ3aXRoRUNEU0EiLCJ0eXBlIjoiSldUIn0%3D.eyJzZXNzaW9uSWQiOiIxNzM0MTY3Ni02ZjEwLTRmZDUtODY0Zi0zY2QxZmRlYWU2NzciLCJpZCI6IjAyMTRiYWNkLTU4NjctNDJmMy05ZTU3LWUxODVmNTQzZjUyMSIsInVzZXJuYW1lIjoiUEFOSEEtNEQySDE1OFdLTkEiLCJlbWFpbCI6ImtyZW5ncGFuaGFAb3V0bG9vay5jb20iLCJyb2xlcyI6WyJDQU1ESUdJS0VZX1BVQkxJQ19VU0VSIl0sImlzc3VlZEF0IjoxNzA1NDgyODg4NDMwLCJleHBpcmVkQXQiOjE3MDYwODc2ODg0MzAsImRlcGFydG1lbnRJZCI6bnVsbCwiY2FtZGlnaWtleUlkIjpudWxsfQ%3D%3D.MGUCMDJArED96YuVj3XFmQI-oN6KQPT06rWr_hD9wSZtIM6QKNagJ1iUe8rI2I1QdfU--QIxAOVA64sHZwI_zCrM5KwxvJf4tOM9_rtsHuKoc3KLoECEluVKrVJKcXkdq26_eSkdQA%3D%3D',
      refreshToken:
        'eyJhbGciOiJTSEE1MTJ3aXRoRUNEU0EiLCJ0eXBlIjoiSldUIn0%3D.eyJzZXNzaW9uSWQiOiIxNzM0MTY3Ni02ZjEwLTRmZDUtODY0Zi0zY2QxZmRlYWU2NzciLCJpZCI6IjAyMTRiYWNkLTU4NjctNDJmMy05ZTU3LWUxODVmNTQzZjUyMSIsInVzZXJuYW1lIjoiUEFOSEEtNEQySDE1OFdLTkEiLCJlbWFpbCI6ImtyZW5ncGFuaGFAb3V0bG9vay5jb20iLCJyb2xlcyI6WyJDQU1ESUdJS0VZX1BVQkxJQ19VU0VSIl0sImlzc3VlZEF0IjoxNzA1NDgyODg4NDMwLCJleHBpcmVkQXQiOjE3MDY2OTI0ODg0MzAsImRlcGFydG1lbnRJZCI6bnVsbCwiY2FtZGlnaWtleUlkIjpudWxsfQ%3D%3D.MGUCMQCM13TSdh4QPDsWKePki77D_7iyJ5Z6RlJOqdAVXv8UNqDcseoBGtzwgHwyRJGPkQkCMCJoWsXmCWUrJkH2IsZ0EVSnMIw3rNNEQe19H7JgqkzLUxWW3krLgc3MYzQ3C7p5VA%3D%3D',
    },
  },
});
