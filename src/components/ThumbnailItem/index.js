import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnail} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageDetails

  const onCilckPic = () => {
    setActiveThumbnail(id)
  }

  const activePic = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnails">
      <button className="button" type="button" onClick={onCilckPic}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={activePic} />
      </button>
    </li>
  )
}

export default ThumbnailItem
