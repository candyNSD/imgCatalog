import TempBox from './TempBox';
import Pagination from '../Components/Pagination';
import TempSearchBox from '../Templete/TempSearch'

const Templete = () => {
    return (
        <div className="templeteBox">
            <TempSearchBox></TempSearchBox>
            <TempBox></TempBox>
            <Pagination></Pagination>
        </div>
    )
}
export default Templete;