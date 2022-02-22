import { useState } from 'react'
import axios from "axios";


export const AllBeers = () => {

  const [allBeerList, setAllBeerList] = useState(null)
  function getAllBeerList() {
    axios({
      method: "GET",
      url:"https://api.catalog.beer/beer",
      auth: {
          username: '51c83a47-8109-4a12-9d27-435205a13d83'
      },
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then((response) => {
      const res =response.data
    //   res.access_token && props.setToken(res.access_token)
      setAllBeerList(({
        id: res.id,
        name: res.name}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <div className="beerlist">

        <p>To get your beer list: </p><button onClick={getAllBeerList}>Click me</button>
        {allBeerList && <div>
            <ul>
                {allBeerList.map((beer, index) => {
                    return(
                        <li key={index}>{beer.id}: {beer.name}</li>
                    )
                })}
            </ul>
            </div>
        }

    </div>


  );
}

;