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

    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'failed', message: 'Method not allowed' });
    }

    if (req.method === 'POST' ) {
        const data = req.body.data

        if(!data.name || !data.lastName) 
            return res.status(400).json({status: 'failed', message: 'invalid data'})
        try {
            const customer = await Customer.create(data)
            return res.status(201).json({status: 'success', message: 'Data created', data: customer}) 
        } catch(err) { 
            return res.status(500).json({status: 'failed', message: 'error in storing data in database', error: err.message})
        }
    }   

}