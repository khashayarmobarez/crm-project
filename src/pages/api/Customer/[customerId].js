import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB"

export default async function handler(req,res) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err)
        res.status(500).json({status: 'failed', message: 'Error in connecting to DB'})
        return
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ status: 'failed', message: 'Method not allowed' });
    }

    if (req.method === 'GET' ) {

        const id = req.body.customerId

        try {
            const customer = await Customer.findOne({_id: id})
            return res.status(200).json({status: 'success', message: 'Data retrieved', data: customer}) 
        } catch(err) { 
            return res.status(500).json({status: 'failed', message: 'error in retrieving data from database', error: err.message})
        }
    }   

}