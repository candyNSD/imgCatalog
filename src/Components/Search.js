
const Search = (props) => {
    return (
        <div>
            <div className="inputBox">
                <input type="text" placeholder={props.placeholder}/>
                <button className="searchBtn">Search</button>
            </div>
        </div>
    )
}

export default Search