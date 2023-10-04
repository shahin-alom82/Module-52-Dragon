import BrakingNew from "./BrakingNew";
import Header from "./Shard/Header/Header";
import LeftSideNav from "./Shard/LeftSideNav/LeftSideNav";
import Navbar from "./Shard/Navbar/Navbar";
import RightSideNav from "./Shard/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNew></BrakingNew>
            <Navbar></Navbar>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h1 className="text-3xl">News Comming Soon...</h1>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;