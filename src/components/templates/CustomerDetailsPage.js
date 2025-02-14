import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomerDetailsPage = ({data}) => {


    const router = useRouter()

    const deleteHandler = async (userData) => {


        const res = await fetch(`/api/deleteCustomer/${userData._id}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if(data.status === 'success') {
            router.push('/')
        }
    }

    return (
        <div className="customer-details">
            <h4>customer details</h4>
            <div className="customer-detail__main">
                <div className="customer-detail__item">
                    <span>name: </span>
                    <p>{data.name}</p>
                </div>
                <div className="customer-detail__item">
                    <span>last name: </span>
                    <p>{data.lastName}</p>
                </div>
                <div className="customer-detail__item">
                    <span>phone: </span>
                    <p>{data.phone}</p>
                </div>
                <div className="customer-detail__item">
                    <span>postal code: </span>
                    <p>{data.postalCode}</p>
                </div>
                <div className="customer-detail__item">
                    <span>date: </span>
                    <p>{moment(data.date).utc().format('YYYY-MM-DD')}</p>
                </div>
            </div>
            <div className="customer-detail__products">
                <p>name</p>
                <p>price</p>
                <p>qty</p>
                {
                    data.products.map((product, index) => (
                        <React.Fragment key={index}>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                            <span>{product.qty}</span>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className="customer-detail__buttons">
                <p>Edit or Delete?</p>
                <button onClick={() => deleteHandler(data)}>delete</button>
                <Link href={`/edit/${data._id}`} >edit handler</Link>
            </div>
        </div>
    );
};

export default CustomerDetailsPage;