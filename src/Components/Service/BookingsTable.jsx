
const BookingsTable = ({ booking ,handleDelete,handleConfirm}) => {
    const { img, title, price, date, customer ,_id ,status} = booking
    
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask w-32 ">
                            <img src={img} alt="service" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>{customer}</td>
            <td>{date}</td>
            <th>${price} </th>
            <th>{status==="confirm"? <span className="font-bold text-orange-600">Confirmed</span> :   <button className="btn btn-outline border-orange-600 text-orange-600 " onClick={()=>handleConfirm(_id)}>Confirm</button>}</th>
        </tr>
    );
};

export default BookingsTable;