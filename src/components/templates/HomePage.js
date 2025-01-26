import CustomerCard from "../modules/CustomerCard";


export default function HomePage({ customers }) {


  return (
    <div>
      {
      customers.map((customer) => (
        <CustomerCard key={customer._id} customer={customer} />
      ))
      }
    </div>
  )

}
