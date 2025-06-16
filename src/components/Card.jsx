// import '../style/index.scss'
import cardCss from '../style/card.module.scss'
function Card() {
  return (
    <div className={cardCss['custom-card']}>
      <h2 className={cardCss['custom-card__title']}>标题</h2>
    </div>
  )
}

export default Card;