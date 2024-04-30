import date from '../assets/icons/Group 32.png'
import call from '../assets/icons/Group 34.png'
import location from '../assets/icons/Group 35.png'
const Info = () => {
    return (
            <div className='flex flex-col lg:flex-row justify-evenly gap-5 my-20 items-center py-16 rounded-xl bg-black'>
                <div className='flex gap-4 items-center'>
                    <img src={date} alt="" />
                    <div>
                        <p className="font-medium">We are open monday-friday</p>
                        <h3 className="font-semibold text-2xl">7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src={call} alt="" />
                    <div>
                        <p className="font-medium">Have a question?</p>
                        <h3 className="font-semibold text-2xl">+2546 251 2658</h3>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src={location} alt="" />
                    <div>
                        <p className="font-medium">Need a repair? our address</p>
                        <h3 className="font-semibold text-2xl">Liza Street, New York</h3>
                    </div>
                </div>
            </div>
    );
};

export default Info;