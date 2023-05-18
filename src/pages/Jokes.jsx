import { useEffect, useState } from "react";

function Jokes() {

    const [data, setData] = useState({})
  const [call, setCall] = useState(false)

  const fetchData = async () =>{
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setData(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleFetch = () =>{
    setCall(!call)
  }

  useEffect(()=>{

    fetchData();

  }, [call])

  return (
    <div>
        <p>{data.value}</p>
      <button onClick={handleFetch}>Fetch New One</button>
    </div>
  )
}

export default Jokes