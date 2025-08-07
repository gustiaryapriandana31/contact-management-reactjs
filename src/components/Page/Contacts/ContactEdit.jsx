import { Link, useParams, useNavigate } from "react-router";
import { useState } from "react";
import { useEffectOnce, useLocalStorage } from "react-use";
import { contactDetail, contactUpdate } from "../../../lib/api/ContactApi";
import { alertError, alertSuccess } from "../../../lib/alert/sweetAlert";
import ContactCreateEdit from "../../Layout/ContactCreateEdit";

export default function ContactEdit() {

    const [token, _] = useLocalStorage("token", "");
    const {id} = useParams();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    async function fetchContact() {
        const response = await contactDetail(token, id);
        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200) {
            setFirstName(responseBody.data.first_name);
            setLastName(responseBody.data.last_name);
            setEmail(responseBody.data.email);
            setPhone(responseBody.data.phone);
        } else {
            await alertError(responseBody.errors);
        }
    }

    useEffectOnce(() => {
        fetchContact()
        .then(() => console.log("Contact fetched successfully"));
    })

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await contactUpdate(token, {
            id,
            first_name,
            last_name,  
            email,
            phone   
        });

        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200) {
            await alertSuccess("Contact updated successfully");
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
                    <i className="fas fa-user-edit text-blue-400 mr-3" /> Edit Contact
                </h1>
            </div>
            <ContactCreateEdit 
                buttonText="Update Contact"
                handleSubmit={handleSubmit} 
                values={{first_name, last_name, email, phone}}
                setters={{setFirstName, setLastName, setEmail, setPhone}} />
        </div>
    </>
}