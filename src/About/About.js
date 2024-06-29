const About = () => {
    return(
        <div>
            <div>
            <h1 className="titleText mb-4 text-center mt-10">About Us</h1>

                <p style={{fontSize:"16px",color:"#0883a6",padding:"30px",lineHeight:"40px",textAlign:"center"}}>Welcome to our photography community at Image Gallery! We are dedicated to celebrating the art and craft of photography in all its forms.
                     Our platform serves as a creative hub for photographers of every skill level, from passionate beginners to seasoned professionals. Here, you can discover captivating images, share your own visual stories, and connect with like-minded individuals who share your love for capturing moments.
                     Join us in exploring the beauty and power of photography through our curated galleries and interactive features. 
                     Whether you're here to learn, inspire, or simply appreciate stunning visuals, 
                     we invite you to immerse yourself in the artistry of photography with us.</p>
                <img src="../assest/img/about.jpg" alt="" />
            </div>
            <div>
                <div className="bgWrapper p-40 mt-20 mb-20">
                    <h4 className="titleText mb-4 text-center font-bold">Our Mission</h4>
                    <p style={{fontSize:"25px",color:"#747778",textAlign:"center"}}>To provide designers the resources they need to do their best work.</p>
                </div>
            </div>
            <div className="flex justify-between items-center m-10">
                <div className="flex flex-col items-center">
                <h3 className="titleText mb-4 text-center mt-10">Work with us</h3>
                <p style={{fontSize:"16px",color:"#747778",padding:"30px",lineHeight:"40px",textAlign:"center"}}>We're building a skilled team that's passionate about bringing you the best creative resources so that you can make your best work. Check out our latest j</p>
                <button className="workBtn ">See our jobs</button>
                </div>
                <div>
                <img src="../assest/img/work.jpg" alt="" />

                </div>
            </div>
        </div>
    )
}
export default About;