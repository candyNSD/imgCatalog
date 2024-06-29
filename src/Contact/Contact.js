import Nav from '../Components/Nav';
import ContactList from '../Contact/ContactList'
import Footer from '../Components/Footer';
import Address from './Address';

const Contact = () => {
    return (
        <div className="App">
      <Address></Address>
      <ContactList></ContactList>
    </div>
    )
}
export default Contact;