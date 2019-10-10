import urlBuilder from './urlBuilder'

describe('#urlBuilder', () => {
  describe('Given no params', () => {
    // Arrange
    const baseUrl = 'fake-base-url'
    const params = {}
    const expectedResponse = 'fake-base-url'

    // Act
    const actual = urlBuilder(baseUrl)(params)

    // Assert
    it('should succeed: returns baseUrl', () => {
      expect(actual).toEqual(expectedResponse)
    })
  })

  describe('Given one param', () => {
    // Arrange
    const baseUrl = 'fake-base-url'
    const params = { foo: 'bar' }
    const expectedResponse = 'fake-base-url?foo=bar'

    // Act
    const actual = urlBuilder(baseUrl)(params)

    // Assert
    it('should succeed: returns baseUrl', () => {
      expect(actual).toEqual(expectedResponse)
    })
  })

  describe('Given multiple params', () => {
    // Arrange
    const baseUrl = 'fake-base-url'
    const params = { foo: 'bar', bar: 'foo' }
    const expectedResponse = 'fake-base-url?foo=bar&bar=foo'

    // Act
    const actual = urlBuilder(baseUrl)(params)

    // Assert
    it('should succeed: returns baseUrl', () => {
      expect(actual).toEqual(expectedResponse)
    })
  })
})
