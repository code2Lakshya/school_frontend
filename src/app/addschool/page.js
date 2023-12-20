import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import './page.css';


const AddSchoolPage = () => {
    return (
        <div className="addschool-page">
            <div className="addschool-wrapper">
                <Navbar />
                <Form />
            </div>
        </div>
    );
}
export default AddSchoolPage;