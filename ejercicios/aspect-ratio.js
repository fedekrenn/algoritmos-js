import axios from 'axios'
import sizeOf from 'image-size'

const IMG_URL = 'https://claropay.com.ar/landing/assets/images/heroImage.png'

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

getAspectRatio(IMG_URL).then(console.log)
