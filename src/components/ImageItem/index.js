import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {imageUrl, category, id} = imageDetails

  const onClickImageItem = () => onClickImage(id)

  return (
    <li className="image-item" onClick={onClickImageItem}>
      <button type="button" className="img-btn">
        <img src={imageUrl} alt={category} className="image" />
      </button>
    </li>
  )
}

export default ImageItem
