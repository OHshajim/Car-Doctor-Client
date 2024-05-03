
const BookingsTable = ({ booking ,handleDelete}) => {
    const { img, title, price, email, date, customer ,_id} = booking
    
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
            <td>{email}</td>
            <td>{date}</td>
            <th>${price} </th>
        </tr>
    );
};

export default BookingsTable;