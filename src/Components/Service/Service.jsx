import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { price, img, title ,_id} = service;
    return (
        <div>
            <div className="card  sm:w-96  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Service" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions items-center justify-between">
                        <h4 className=" text-orange-600 font-semibold mb-3">Price : {price}</h4>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-outline border-none text-orange-600"><FaArrowRight /></button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;