
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsContainer = ({ news }) => {
    console.log(news);
    const {details, image_url, title,_id } = news
    return (
        <div>
            <div>
                <img src={image_url} alt="" />
                <h1>{title}</h1>
                <div className='my-5'>
                    {
                        details.length >200 ? <p>{details.slice(0,200)} <Link className='text-2xl text-red-600 font-bold' to={`/news/${_id}`}>Read More...</Link> </p> : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired
}
export default NewsContainer;