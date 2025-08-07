import { Link, useParams, useNavigate } from "react-router";
import { useState } from "react";
import { alertError, alertSuccess } from "../../../lib/alert/sweetAlert";
import { contactDetail } from "../../../lib/api/ContactApi";
import { addressCreate } from "../../../lib/api/AddressApi";
import { useEffectOnce } from "react-use";
import { useLocalStorage } from "react-use";
import AddressCreateEdit from "../../Layout/AddressCreateEdit.jsx";

export default function AddressCreate() {

    const [token, _] = useLocalStorage("token", "");
    const {id} = useParams();
    const [contact, setContact] = useState([]);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [postal_code, setPostalCode] = useState("");

    const navigate = useNavigate();

    async function fetchContact() {
        const response = await contactDetail(token, id);
        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200) {
            setContact(responseBody.data);
        } else {
            await alertError(responseBody.errors);
        }
    }

    useEffectOnce(() => {
        fetchContact()
        .then(() => console.log("Contact fetched successfully"));
    });


    async function handleSubmit(e) {
        e.preventDefault();

        const response = await addressCreate(token, id, {
            street,
            city,
            province,
            country,
            postal_code
        });

        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200) {
            await alertSuccess("Address created successfully");
            await navigate({
                pathname: `/dashboard/contacts/${id}`
            });
        } else {
            await alertError(responseBody.errors);
        }
    }

    return <>
        <div>
            <div className="flex items-center mb-6">
                <Link to={`/dashboard/contacts/${id}`} className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                    <i className="fas fa-arrow-left mr-2" /> Back to Contact Details
                </Link>
                <h1 className="text-2xl font-bold text-white flex items-center">
                    <i className="fas fa-plus-circle text-blue-400 mr-3" /> Add New Address
                </h1>
            </div>
            <AddressCreateEdit 
                buttonText="Add Address"
                handleSubmit={handleSubmit} 
                contact={contact}
                values={{id, street, city, province, country, postal_code}}
                setters={{setStreet, setCity, setProvince, setCountry, setPostalCode}}/>
        </div>
    </>
}