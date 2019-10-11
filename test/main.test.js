QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST calc', assert => {
  assert.equal(calc(2), 12.57, 'short int')
  assert.equal(calc(235),173494.45, 'Integer type')
  assert.equal(calc(12345),478775657.35, 'long')
  assert.equal(calc(20.5), 1320.25, 'Float type')
 assert.equal(calc(3.1234), 30.65, 'Double type')

 
})

window.addEventListener('load', () => {
    const appURL = '../calc.html'
    const openingTag = '<article  class="ad col-md-4">'
    const closingTag = '</article>'
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end)
        const qunitFixtureBody = document.getElementById('qunit-fixture')
        qunitFixtureBody.innerHTML = html
        console.info(qunitFixtureBody)
        QUnit.start()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })