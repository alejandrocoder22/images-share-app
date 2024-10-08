import { useEffect, useState } from 'react'

import DropImage from '../components/DropImage'
import SingleImage from '../components/SingleImage'
import { getUserImages } from '../services/getAllImages'
import { Image } from '../types.d'
const Dashboard = (): JSX.Element => {
  const [images, setImages] = useState<Image[] | null>([])
  const [selectedId, setSelectedId] = useState<null | number>(null)

  useEffect(() => {
    getUserImages(setImages)
  }, [])
  return (
    <div className='dashboard wrapper min-height'>
      <div className='dashboard__drop-image-container'>
        <DropImage setImages={setImages} />
      </div>
      <div className='dashboard__images-container'>
        {
        images?.map(image => (
          <SingleImage key={image.image_id} selectedId={selectedId} image={image} setImages={setImages} setSelectedId={setSelectedId} images={images} />
        ))
      }
      </div>

    </div>

  )
}

export default Dashboard
