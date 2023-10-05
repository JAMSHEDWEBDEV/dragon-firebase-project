import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PickPing1 from '../../assets/1.png';
import PickPing2 from '../../assets/2.png';
import PickPing3 from '../../assets/3.png';
import {AiOutlineCalendar } from 'react-icons/ai';
import moment from 'moment';


const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold mb-5">All Category</h1>
            <div className="space-y-8 my-5 ml-12">
                {
                    categories.map(category => 
                          <NavLink

                          style={({ isActive }) => ({
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "black",
                          })}

                          to={`/category/${category.id}`}
                          className="block mr-4 bg-gray-300 px-7 py-3 rounded"
                           key={category.id}
                           >{category.name}</NavLink>

                        )
                }
            </div>
            {/* image start  */}
            <div className="my-5">
                <img src={PickPing1} alt="" />
                <p className="text-xl font-semibold my-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex gap-4 items-center ">
                    <h3>sports</h3>
                    <p><AiOutlineCalendar/></p>
                    <p>{moment().format("MMMM D, YYYY")}</p>
                </div>
            </div>
            <div className="my-5">
                <img src={PickPing2} alt="" />
                <p className="text-xl font-semibold my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex gap-4 items-center ">
                    <h3>sports</h3>
                    <p><AiOutlineCalendar/></p>
                    <p>{moment().format("MMMM D, YYYY")}</p>
                </div>
            </div>
            <div className="my-5">
                <img src={PickPing3} alt="" />
                <p className="text-xl font-semibold my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex gap-4 items-center ">
                    <h3>sports</h3>
                    <p><AiOutlineCalendar/></p>
                    <p>{moment().format("MMMM D, YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNavbar;