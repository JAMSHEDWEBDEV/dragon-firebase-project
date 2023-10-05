import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Header/Navbar/Navbar";
import RightSideNavbar from "../../components/RightSideNavbar/RightSideNavbar";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-8">
                <div className="col-span-3 border">
                    <p className="text-4xl font-bold">News Details</p>
                  {id}
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>

            </div>
            <h1>This is news details page</h1>
        </div>
    );
};

export default NewsDetails;