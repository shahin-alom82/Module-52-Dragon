import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, thumbnail_url,details, _id } = news;
    return (
        <div className="card bg-gray-200  mb-10">
            <img className="w-[718px] h-[420px] rounded-lg" src={thumbnail_url} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                    {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link
                    to={`/news/${_id}`} 
                    className="text-blue-600 ">Read More...</Link></p>
                    : <p>{details}</p>
                    }
                
            </div>
        </div>
    );
};

export default NewsCard;