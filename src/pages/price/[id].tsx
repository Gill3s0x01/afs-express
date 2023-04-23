import { useRouter } from 'next/router'

const Price = () => {
  const { query } = useRouter()
  return <h1>Price: {JSON.stringify(query)}</h1>
}

export default Price
