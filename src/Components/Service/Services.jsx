import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div className="my-20">
            <h4 className=" text-center text-orange-600 font-semibold mb-3">Service</h4>
            <h1 className=" text-center text-2xl md:3xl xl:text-5xl font-bold">Our Service Area</h1>
            <p className="py-6 text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;