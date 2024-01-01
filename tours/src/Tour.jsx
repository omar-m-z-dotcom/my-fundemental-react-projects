import { useContext, useState } from 'react';
import { appContext } from './App';

const Tour = ({ id, name, info, image, price }) => {
    const { removeTour } = useContext(appContext);
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className='tour-price'>{price}</span>
            <footer>
                <div className="tour-info">
                    <h5>{name}</h5>
                    <p>
                        {readMore ? info : `${info.substring(0, 100)}...`}
                        <button className='info-btn' type='button' onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'show less' : 'read more'}
                        </button>
                    </p>
                </div>
                <button className="delete-btn btn-block btn" onClick={() => removeTour(id)}>not interested</button>
            </footer>
        </article>
    )
}
export default Tour