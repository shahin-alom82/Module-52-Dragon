import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-10">
            <h1 className="text-2xl font-bold mt-4 ml-4">All Categories</h1>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="mt-2 block ml-4" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;