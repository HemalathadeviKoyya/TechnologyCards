// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItemObject} = props
  const {title, description, imgUrl, className} = cardItemObject

  return (
    <li className={`card-container ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>

      <div className="image-container">
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
