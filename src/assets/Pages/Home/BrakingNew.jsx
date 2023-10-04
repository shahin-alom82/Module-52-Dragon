
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakingNew = () => {
    return (
        <div className="mt-4 flex ">
            <button className="btn btn-secondary font-bold text-white ">Breaking News</button>
            <Marquee pauseOnHover={true} speed={150} className="text-xl mt-2 text-green-700">
            <Link className="mr-10" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link  className="mr-10" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link  className="mr-10" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNew;