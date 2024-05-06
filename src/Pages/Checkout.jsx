import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, title, price, img } = service
    const handleBook = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const order = {
            customer: name,
            email,
            date,
            service_id: _id,
            price: price,
            img: img,
            title: title
        }
        // console.log(order);
        fetch('https://car-doctor-server-seven-ochre.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Done',
                    text: 'Successfully booked',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
            })
    }
    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="card shrink-0 w-full  shadow-2xl ">
                <form className="card-body" onSubmit={handleBook}>
                    <h1 className="text-center font-bold text-3xl"> book Service : {title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="price" value={price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline border-orange-600 text-orange-600">Book now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;