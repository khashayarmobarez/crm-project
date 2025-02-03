import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import moment from "moment";


const CustomerEditPage = ({data, id}) => {

    const router = useRouter()

    const date = data.date ? moment(data.date).utc().format('YYYY-MM-DD') : ''

    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName ,
        email: data.email ,
        phone: data.phone || '',
        address: data.address || '',
        postalCode: data.postalCode || '',
        products: data.products || '',
        date
    })

    const cancelHandler = () => {
        router.push('/')
    }

    const saveHandler = async () => {
        const res = await fetch(`/api/editCustomer/${id}`, {
            method:'PATCH',
            body: JSON.stringify({data: form}),
            headers: {'Content-Type': 'application/json'}
        })

        const data = await res.json()
        if(data.status === 'success') router.push('/')
    }

    return (
        <div className="customer-page">
            <h4>edit customer</h4>
            <Form form={form} setForm={setForm} />
            <div className="customer-page__buttons">
                <button className="first" onClick={cancelHandler}>cancel</button>
                <button className="first" onClick={saveHandler}>edit</button>
            </div>
        </div>
    );
};

export default CustomerEditPage;