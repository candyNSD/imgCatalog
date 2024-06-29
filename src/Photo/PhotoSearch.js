import Search from '../Components/Search';

const placeholder = ["Enter the Photo Name"]

function PhotoSearch ()  {
    return (
        <div className="SearchBox">
            <Search placeholder={placeholder} ></Search>
        </div>
    )
}
export default PhotoSearch;