
import Header from "../assets/Pages/Home/Shard/Header/Header";
import Navbar from "../assets/Pages/Home/Shard/Navbar/Navbar";
import RightSideNav from "../assets/Pages/Home/Shard/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";


const News = () => {
    const {id} = useParams();

    return (
        <div>
         <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-2xl font-bold">News Detail</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            
            </div>

        </div>
    );
};

export default News;