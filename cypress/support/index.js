Cypress.Server.defaults({
    delay:500,
    force404:false,
    ignore: (xhr) => {
      return false;
    },
  })
  
  module.exports = (on, config) => {
    // log any uncaught exceptions to the console
    on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught Exception: ', err.message)
      return false
    })
  }

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotFilePath = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${screenshotFileName}`;
    addContext({ test }, screenshotFilePath);
  }
});