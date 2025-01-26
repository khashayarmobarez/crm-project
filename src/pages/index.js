import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

// pages
import HomePage from "@/components/templates/HomePage";

// ssr page
export default function Index({ customers}) {

  console.log(customers);

  return (
    <HomePage customers={customers} />
  );
}


export async function getServerSideProps() {

  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      }
    }
  } catch(err) {
    return {
      notFound: true,
    }
  }

  return {
    props: {},
  };
}