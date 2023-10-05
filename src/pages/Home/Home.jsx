import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Header/Navbar/Navbar";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import LeftSideNavbar from "../../components/LeftSideNavbar/LeftSideNavbar";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import RightSideNavbar from "../../components/RightSideNavbar/RightSideNavbar";

const Home = () => {

    const allNews = useLoaderData([]);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            {/* news container start  */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-8">
                {/* left side navbar  */}
                <div className="border">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                {/* news container  */}
                <div className="md:col-span-2 border">
                    {
                        allNews.map(news => <NewsContainer key={news.id} news={news}></NewsContainer>)
                    }
                </div>
                {/* right side navbar  */}
                <div className="border">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;