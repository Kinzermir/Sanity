import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'
import { client } from './client'

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// })

// export const urlForImage = (source: Image) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url()
// }

const imageBuilder = createImageUrlBuilder(client)
export const urlForImage = (source:Image) =>{
  return imageBuilder?.image(source)
};
