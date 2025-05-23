import pedpr from '../assets/images/pedpr.jpg'

const Pedicure = () => {
    return (
        <div className="pedicure-container">
            <div className="pedicure-content">
                <h2>Педикюр</h2>
                <p>Педикюр — это не только уход, но и эстетика.</p>
                <p>Красивые, ухоженные ноги подчёркивают общий стиль и дарят уверенность.</p>
                <p>Варианты с дизайном и без — всё обсуждается индивидуально.</p>
                <p>Если нужного варианта нет в прайсе — детали можно согласовать при общении.</p>
                <p>Примеры работ, сертификаты и отзывы — в Instagram, в закреплённых сторис.</p>
                <img className="pedicure-img" src={pedpr} alt="Педикюр" />
            </div>
        </div>
    )
}

export default Pedicure;