import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: 'failed', message: 'Error in connecting to DB' });
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ status: 'failed', message: 'Method not allowed' });
    }

    // For GET requests, use query parameters
    const { customerId } = req.query;

    try {
        const customer = await Customer.findOne({ _id: customerId });
        if (!customer) {
            return res.status(404).json({ status: 'failed', message: 'Customer not found' });
        }
        return res.status(200).json({ status: 'success', message: 'Data retrieved', data: customer });
    } catch (err) {
        return res.status(500).json({ status: 'failed', message: 'Error in retrieving data from database', error: err.message });
    }
}
