const axios = require('axios')
const sizeOf = require('image-size')

async function getAspectRatio (url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const dimensions = sizeOf(response.data)
    const aspectRatio = `${dimensions.width}:${dimensions.height} -> ${dimensions.width / dimensions.height}`
    return aspectRatio
  } catch (error) {
    return error
  }
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Aspect ratio calculator', () => {
  this.timeout(8000)

  it('should return the aspect ratio of an image', async () => {
    assert.equal(await getAspectRatio('https://picsum.photos/200/300'), '200:300 -> 0.6666666666666666')
  })

  it('should return the aspect ratio of an image', async () => {
    assert.equal(await getAspectRatio('https://picsum.photos/400/400'), '400:400 -> 1')
  })

  it('should return the aspect ratio of an image', async () => {
    assert.equal(await getAspectRatio('https://picsum.photos/800/400'), '800:400 -> 2')
  })

  it('should return the aspect ratio of an image', async () => {
    assert.equal(await getAspectRatio('https://picsum.photos/400/800'), '400:800 -> 0.5')
  })

  it('should return an error message if the image URL is invalid', async () => {
    const result = await getAspectRatio('https://picsum.photos/invalid')
    assert.instanceOf(result, Error)
  })
})
