import CustomerEditPage from "@/components/templates/CustomerEditPage"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


function Index() {

  const router = useRouter()

  // is ready is for telling us when query is ready
  const { 
    query: { customerId },
    isReady 
  } = router

  const [data, setData] = useState(null)


  useEffect(() => {
    if(isReady) {
      fetch(`/api/customer/${customerId}`)
      .then(res => res.json())
      .then(data => setData(data.data))
    }
  },[isReady])

  if(data) return (
    <CustomerEditPage data={data} id={customerId} />
  )
}

export default Index
