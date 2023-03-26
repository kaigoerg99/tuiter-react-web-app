import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const stats = useSelector(state => state.stats)
    return(
        <ul className="list-group">
            {
                stats.map(stat =>
                    <TuitItem
                        key={stat._id} stat={stat}/> )
            }
        </ul>
    );
};
export default TuitsList;