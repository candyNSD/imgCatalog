import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const contactList = [
    {
        img: '/assest/img/contact1.jpg',
        name: "Ryan White",
        desc: "Chief Executive Officer",
        content: "Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.",
        social: [<FaFacebook />, <FaTwitter />, <FaInstagramSquare />]
    },
    {
        img: '/assest/img/contact2.jpg',
        name: "Catherine Pinky",
        desc: "Chief Marketing Officer",
        content: "Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra, in varius lacus eleifend. Quisque ut eleifend lacus.",
        social: [<FaFacebook />, <FaTwitter />, <FaInstagramSquare />]
    },
    {
        img: '/assest/img/contact3.jpg',
        name: "Johnny Brief",
        desc: "Accounting Executiver",
        content: "Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.",
        social: [<FaFacebook />, <FaTwitter />, <FaInstagramSquare />]
    },
    {
        img: '/assest/img/contact4.jpg',
        name: "George Nelson",
        desc: "Creative Art Director #C69",
        content: "Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.",
        social: [<FaFacebook />, <FaTwitter />, <FaInstagramSquare />]
    },
]
const ContactList = () => {
    return (
        <div className="flex flex-wrap gap-4  justify-center m-10">
            {
                contactList.map((item) => (
                    <div style={{ width: "350px" }}>
                        <img src={item.img} alt="" style={{ width: "350px", height: "200px", padding: "10px 0" }} />
                        <p style={{ fontSize: "25px", color: "#0883a6", fontWeight: "bold" }}>{item.name}</p>
                        <span style={{ fontSize: "20px", color: "#c9306d",padding: "10px 0"}}>{item.desc}</span>
                        <p style={{ fontSize: "15px", color: "#888888",height:"120px",padding: "10px 0"}}>{item.content}</p>
                        <div>
                <ul className="flex gap-6">
                    {item.social.map((icon)=>(
                        <li style={{background:"#888888", padding:"10px", cursor:"pointer", borderRadius:"10px"}}><a href="#" style={{color:"#fff",fontSize:"20px"}}>{icon}</a></li>
                    ))}
                </ul>
            </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ContactList