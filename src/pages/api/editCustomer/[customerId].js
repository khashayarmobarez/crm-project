import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err)
        res.status(500).json({status: 'failed', message: 'Error in connecting to DB'})
        return
    }

    if(req.method === 'PATCH') {
        const id = req.query.customerId;
        const data = req.body.data; 

        try {
            const customer = await Customer.findOne({_id: id});
            customer.name = data.name;
            customer.lastName = data.lastName;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.date = data.date;
            customer.postalCode = data.postalCode;
            customer.products = data.products;
            customer.updatedAt = Date.now();
            customer.save();
            return res.status(200).json({status: 'success', message: 'Data Edited', data: customer})
        } catch(err) {
            return res.status(500).json({status: 'failed', message: 'Error in editing data', error: err.message})
        }
    }

    if(req.method !== 'EDIT') {
        return res.status(405).json({status: 'failed', message: 'Method not allowed'})
    }

}