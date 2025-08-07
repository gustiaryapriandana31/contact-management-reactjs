import { useLocalStorage } from "react-use";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function RedirectUser() {

    const [token, _] = useLocalStorage("token", "");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate({
                pathname: "/login"
            });            
        } else {
            navigate({
                pathname: "/dashboard/contacts"
            });
        }
    }, [token, navigate])


    return null;
}