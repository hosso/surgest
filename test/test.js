const surge = require('surge')
jest.mock('surge')
surge.mockImplementation(() => ({
  publish: () => () => {}
}))

const { surgest } = require('../lib')

process.chdir('./public')

test('surgest', () => {
  expect(surgest('awesome-website', 'hosso', true)).toBeUndefined()
})
