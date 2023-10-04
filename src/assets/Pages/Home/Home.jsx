import { useLoaderData } from "react-router-dom";
import BrakingNew from "./BrakingNew";
import Header from "./Shard/Header/Header";
import LeftSideNav from "./Shard/LeftSideNav/LeftSideNav";
import Navbar from "./Shard/Navbar/Navbar";
import RightSideNav from "./Shard/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";


const Home = () => {

    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BrakingNew></BrakingNew>
            <Navbar></Navbar>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News Container */}
                <div className="md:col-span-2 ">
                    {
                        news.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;