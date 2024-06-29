const page = [1,2,3,4,5];

const Pagination = () => {
    return (
        <div className=" pageWrapper flex justify-between p-10">
            <button>Previous</button>
            <ul className="flex gap-3">
                {page.map((item) =>(
                    <li><a href="#" style={{color:"#fff"}}>{item}</a></li>
                ))}
            </ul>
            <button>Next</button>
        </div>
    )
}
export default Pagination;