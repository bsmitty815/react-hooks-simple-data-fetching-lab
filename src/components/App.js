// create your App component here

import { useState, useEffect } from "react"


function App() {
        const [dogImage, setDogImage] = useState(null)


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then((dogImage => {
          setDogImage(dogImage.message) 
        }
      )
    )}, [])

    if (!dogImage) return <p>Loading...</p>


    return (
        <div>
            <img src={dogImage} alt="A Random Dog" />
        </div>
    )
}

export default App