import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const inputValue = [
    {
        type: "text",
        placeholder: "Name"
    },
    {
        type: "email",
        placeholder: "Email"
    }
]

const AddressValue = [
    {
        icon: <MdOutlineMail />,
        link: "Email: info@company.com"
    },
    {
        icon: <FaPhoneAlt />,
        link: "Tel: 010-020-0340"
    },
    {
        icon: <TbWorld />,
        link: "URL: www.company.com"
    }
]
const Address = () => {
    return (
        <div className="flex flex-wrap justify-center gap-20 m-10">
            <div className="contactWrapper">
                <h3 className="titleText">Contact Page</h3>
                {
                    inputValue.map((item) => (
                        <div>
                            <div className="inputcontact mt-5 mb-5">
                                <input type={item.type} placeholder={item.placeholder} />
                            </div>

                        </div>
                    ))
                }
                <div className="inputcontact mt-5 mb-5">
                    <textarea type="text" placeholder="Message.." />
                </div>
                <button className="submitBtn">Submit</button>
            </div>

            <div className="AddressWrapper w-[400px]">
                <h3 className="titleText">Contact Page</h3>
                <div className="text-l text-gray-500">
                    <p className="mt-7 ">Quisque eleifend mi et nisi eleifend pretium. Duis porttitor accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget vestibulum purus.</p>
                    <p className="mt-10">120-240 Fusce eleifend varius tempat ligula 10660</p>
                    <ul className="flex flex-col mt-6">
                        {
                            AddressValue.map((address) => (
                                <li className="flex items-center text-l">
                                    <i className="pr-4 ">{address.icon}</i>
                                    <p>{address.link}</p>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className="locationWrapper w-[500px]">
                <h3 className="titleText mb-4">Our Location</h3>
                <div>
                    <img src="../assest/img/google.png" alt="" style={{width:"300px",height:"300px"}} />
                </div>
            </div>
        </div>
    )
}
export default Address;