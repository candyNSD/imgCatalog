import Photo from '../Components/Photo';
import Pagination from '../Components/Pagination';
import PhotoSearch from '../Photo/PhotoSearch'


function Photoss() {
  return (
    <div className="App">
      <PhotoSearch></PhotoSearch>
      <Photo></Photo>
      <Pagination></Pagination>
    </div>
  );
}

export default Photoss;