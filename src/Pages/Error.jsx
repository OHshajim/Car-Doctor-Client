import Nav from "../Components/Nav";
import error from'../assets/error/Frame.png'
const Error = () => {
    return (
        <div>
            <Nav/>
            <div className="flex justify-center mx-5">
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default Error;