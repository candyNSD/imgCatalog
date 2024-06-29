const photo = [
    {
        img: '/assest/img/img2.jpg',
        name: "Sun Raise",
        date: "20/10/2024",
        views: "118,900 Views"
    },
    {
        img: '/assest/img/img3.jpg',
        name: "Clock",
        date: "4/10/2024",
        views: "118,900 Views"
    },
    {
        img: '/assest/img/img5.jpg',
        name: "Rose",
        date: "20/6/2024",
        views: "90,900 Views"
    },
    {
        img: '/assest/img/img6.jpg',
        name: "Mountian",
        date: "25/6/2024",
        views: "78,900 Views"
    },
    {
        img: '/assest/img/img7.jpg',
        name: "Rock",
        date: "21/11/2024",
        views: "199,900 Views"
    },
    {
        img: '/assest/img/img9.jpg',
        name: "Nature",
        date: "10/10/2024",
        views: "50,900 Views"
    },
    {
        img: '/assest/img/img10.jpg',
        name: "Guitar",
        date: "29/8/2024",
        views: "118,900 Views"
    },
    {
        img: '/assest/img/img11.jpg',
        name: "Cat",
        date: "20/10/2024",
        views: "118,900 Views"
    },
    {
        img: '/assest/img/img12.jpg',
        name: "Sea Shell",
        date: "20/10/2024",
        views: "118,900 Views"
    },
    {
        img: '/assest/img/img14.jpg',
        name: "Tortoise",
        date: "26/6/2024",
        views: "129,900 Views"
    },
    {
        img: '/assest/img/img13.jpg',
        name: "Sea Plant",
        date: "27/1/2024",
        views: "18,900 Views"
    },
    {
        img: '/assest/img/img4.webp',
        name: "Van",
        date: "20/8/2024",
        views: "318,900 Views"
    },
]
const Photo = () => {
    return (
        <div className="photo-wrapper p-5 flex flex-col" >
            <div className="mt-10 mb-10 font-bold">
                <h1>Latest Photos</h1>
            </div>

            <div className="flex flex-wrap md:justify-center md:gap-20 sm:gap-3">
                {
                    photo.map((item) => (
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

export default Photo