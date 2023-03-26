import React from "react";
import {toggleLiked, deleteTuit} from '../reducers/tuit-stats-reducer';
import {useDispatch} from "react-redux";
const TuitItem = ({stat}) => {
    const dispatch = useDispatch();
    const onLiked = (tuit) => {
        dispatch(toggleLiked(tuit));
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-3 rounded-circle" src={require("../images/"+stat.image)}/>
                </div>
                <div className="col-10">
                    <div><span className='fw-bolder'>{stat.userName}</span> {stat.handle} . {stat.time}
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(stat._id)}></i>
                    </div>
                    <div>{stat.tuit}</div>
                    <div className="row mt-3">
                        <div className="col"><i className="bi bi-chat"></i> {stat.replies}</div>
                        <div className="col"><i className="bi bi-arrow-repeat"></i> {stat.retuits}</div>
                        <div className="col">
                            <i className={stat.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"} onClick={() => onLiked(stat)}></i> {stat.likes}
                        </div>
                        <div className="col"><i className="bi bi-share"></i></div>
                    </div>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;