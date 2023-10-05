
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="bg-gray-100 rounded p-3 flex items-center mb-7">
                 <div className="mr-5">
                    <button className="bg-red-700 text-white px-7 py-2 rounded">Latest</button>
                 </div>
                    <Marquee pauseOnHover={true} speed={100}>
                        <Link className="mr-12" to="/"> 1. I can be a React component, multiple React components.....</Link>
                        <Link className="mr-12" to="/"> 2. I can be a React component, multiple React components......</Link> 
                        <Link className="mr-12" to="/"> 3. I can be a React component, multiple React components.....</Link> 
                    </Marquee>
            </div>
    );
};

export default BreakingNews;