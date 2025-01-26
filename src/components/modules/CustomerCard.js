import Link from "next/link"
import { useRouter } from "next/router"


function CustomerCard({customer}) {

    const router = useRouter()

    const deleteHandler = async () => {

        const res = await fetch(`/api/deleteCustomer/${customer._id}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if(data.status === 'success') {
            router.reload()
            // alert('Customer deleted')
        }
    }

    return (
        <div className="card">
        <div className="card__details">
            <p>
                {customer.name} {customer.lastName}
            </p>
            <p>{customer.phone}</p>
        </div>
        <div className="card__buttons">
            <Link href={`/edit/${customer._id}`} >Edit</Link>
            <Link href={`/customer/${customer._id}`} >details</Link>
            <button onClick={deleteHandler}>Delete</button>
        </div>
        </div>
    )
}

export default CustomerCard
