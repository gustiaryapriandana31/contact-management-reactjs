import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import { contactCreate } from "../../../lib/api/ContactApi";
import { useLocalStorage } from "react-use";
import { alertSuccess, alertError } from "../../../lib/alert/sweetAlert";
import ContactCreateEdit from "../../Layout/ContactCreateEdit";

export default function ContactCreate() {

    const [token, _] = useLocalStorage("token", "");
    const navigate = useNavigate();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await contactCreate(token, {
            first_name,
            last_name,
            email,
            phone
        });
        
        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200) {
            await alertSuccess("Contact created successfully");
            await navigate({
                pathname: "/dashboard/contacts"
            });
        } else {
            await alertError(responseBody.errors);
        }
    }

    return <>   
        <div>
            <div className="flex items-center mb-6">
                <Link to="/dashboard/contacts" className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                    <i className="fas fa-arrow-left mr-2" /> Back to Contacts
                </Link>
                <h1 className="text-2xl font-bold text-white flex items-center">
                    <i className="fas fa-user-plus text-blue-400 mr-3" /> Create New Contact
                </h1>
            </div>
            <ContactCreateEdit 
                buttonText="Create Contact"
                handleSubmit={handleSubmit} 
                values={{first_name, last_name, email, phone}}
                setters={{setFirstName, setLastName, setEmail, setPhone}} />
        </div>
    </>
}