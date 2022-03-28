import Footer from "../footer";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './addnewPage.css';

function AddNewPage() {

  return (
    <div className="mainaddnewpageDiv">
        <div className="PageTitle">
            Page Title
        </div>
            <div className="titleinputboxdiv">
                <input type="text" placeholder="Page Title" size="220"></input>
            </div>
            <div className="mainInputFiled">
                <input type="text" width="220px" size="220"></input>
            </div>
        <div className="buttondiv">
           <Button variant="contained">Save Page</Button>
           <Button variant="contained"><Link to='/'> Back to Book</Link></Button>
        </div>
        <Footer/>
    </div>
  );
}

export default AddNewPage;
