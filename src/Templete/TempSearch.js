import Search from '../Components/Search';
const placeholder = [
    "Enter the Templete Name"
]
function TempSearch ()  {
    return (
        <div className="TempSearchBox">
            <Search placeholder = {placeholder}></Search>
        </div>
    )
}
export default TempSearch;