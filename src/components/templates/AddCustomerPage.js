import { useState } from "react"
import Form from "../modules/Form"
import { useRouter } from "next/router"


function AddCustomerPage() {

    const router = useRouter()

    const [form, setForm] = useState({
        name:'',
        lastName:'',
        email:'',
        phone:'',
        address:'',
        postalCode:'',
        date:'',
        products:[]
    })
    
    const saveHandler = async () => {
        const res = await fetch('/api/Customer', {
            method: "POST",
            body: JSON.stringify({data: form}),
            headers: { "Content-Type": "application/json"}
        })
        
        const data = res.json()
        console.log(data)
        if(data.status === 'success') router.push('/');
    }

    const cancelHandler = async () => {
        setForm({
            name:'',
            lastName:'',
            email:'',
            phone:'',
            address:'',
            postalCode:'',
            date:'',
            products:[]
        })
        router.push('/')
    }
    
  return (
    <div className="customer-page">
        <h4>Add New Customer</h4>
        <Form form={form} setForm={setForm} />
        <div className="customer-page__buttons">
            <button className="first" onClick={cancelHandler}>cancel</button>
            <button className="second" onClick={saveHandler}>save</button>
        </div>
    </div>
  )
}

export default AddCustomerPage
