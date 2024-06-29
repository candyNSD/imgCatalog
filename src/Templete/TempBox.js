const Templete = [
    {
        img: '/assest/img/temp1.jpg',
        name: "Certificate"
    },
    {
        img: '/assest/img/temp5.webp',
        name: "Presentation"
    },
    {
        img: '/assest/img/temp2.webp',
        name: "Certificate"

    },
    {
        img: '/assest/img/temp12.png',
        name: "FaceBook"
    },
    {
        img: '/assest/img/temp3.avif',
        name: "Business card"
    },
    {
        img: '/assest/img/temp10.png',
        name: "You Tube"
    },
    {
        img: '/assest/img/temp7.png',
        name: "LinkedIn"
    },
    {
        img: '/assest/img/temp9.png',
        name: "LinkedIn"
    },
    {
        img: '/assest/img/temp6.png',
        name: "Presentation"
    },
    {
        img: '/assest/img/temp11.png',
        name: "You Tube"
    },
    {
        img: '/assest/img/temp8.png',
        name: "Presentation"
    },
    {
        img: '/assest/img/temp13.png',
        name: "FaceBook"
    }
]
const TempBox = () => {
    return (
        <div className="photo-wrapper p-5 flex flex-col" >
            <div className="mt-10 mb-10 font-bold">
                <h1>Latest Templetes</h1>
            </div>

            <div className="flex flex-wrap md:justify-center md:gap-20 sm:gap-3">
                {
                    Templete.map((item) => (
                        <>
                            <div className="imgwrapper relative flex justify-center items-center" >
                                <img src={item.img} style={{ width: "300px", height: "200px", borderRadius: "10px", }} alt="" />
                                <h2 style={{ position: "absolute" }}>{item.name}</h2>       
                            </div>
                            {/* <div className="flex justify-end"> 
                                <p>{item.date}</p>
                                <p>{item.views}</p>
                            </div> */}
                        </>


                    ))
                }
            </div>


        </div>
    )
}

export default TempBox;