import { useState } from 'react'
import axios from "axios";


export const AllBeers = () => {

  const [allBeerList, setAllBeerList] = useState(null)
  function getAllBeerList() {
    // axios.get('https://api.catalog.beer/beer', {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'Content-Type, Authorization',  
    //     },
    //     proxy: {
    //         host: '10.0.0.74',
    //         port: 3000
    //     }
    // })
    axios({
      method: "GET",
      url:"/allbeers",
     
    //   headers: {
    //     'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
        
    //   },

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