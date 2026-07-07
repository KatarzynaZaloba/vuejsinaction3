module.exports = {
  'home page loads': browser => {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#app', 10000)
      .assert.elementPresent('#app')
      .end()
  }
}
