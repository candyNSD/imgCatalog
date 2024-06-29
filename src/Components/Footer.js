import { GiFilmSpool } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const footerLinks = ["Advertise","Support","Our Company","Contact"];
const socialLink =[<FaFacebook />,<FaTwitter />,<FaInstagramSquare />,<FaPinterest />]

const Footer = () => {
    return (
        <div className="flex justify-between items-center p-10 m-5 bg-gray-200">
            <div>
                <a href='#' style={{ color: "#0883a6", fontSize: "20px", display: 'flex', alignItems: "center", fontWeight:"bold" }}>
                    <GiFilmSpool style={{ fontSize: "30px" }} />
                    <span>Image Gallary</span>
                </a>
                <p style={{color:"#0883a6", fontSize: "15px", width:"400px", marginTop:"10px"}}>An image gallery is a versatile and visually engaging way to present a collection of photographs or artworks.</p>
            </div>
            <div>
                <h3 style={{color:"#0883a6",fontSize:"20px",fontWeight:"bold"}}>Our Links</h3>
                <ul>
                    {footerLinks.map((item)=>(
                        <li><a href="#" style={{color:"#413f3f",fontSize:"15px"}}>{item}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="flex gap-6">
                    {socialLink.map((item)=>(
                        <li style={{background:"#0883a6", padding:"10px", cursor:"pointer", borderRadius:"10px"}}><a href="#" style={{color:"#fff",fontSize:"20px"}}>{item}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer;