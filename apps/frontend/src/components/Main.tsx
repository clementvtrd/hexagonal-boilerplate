import useFetch from 'hooks/useFetch'
import { StrictMode, useState } from 'react'

export default function Main() {
  const [msg, setMsg] = useState()

  const fetch = useFetch('hello', 'GET')

  fetch()
    .then((data: any) => {
      console.log({ data })
      setMsg(data.payload)
    })
  
  return (
    <StrictMode>
      <p>{msg}</p>
    </StrictMode>
  )
}
