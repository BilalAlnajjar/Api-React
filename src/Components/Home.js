import '../css/home-style.css'
import {useEffect} from "react";
import {useState} from "react";

function Home() {

    const [state,setState] = useState([])
    let valueName
           const getApiData = async () => { //git items by api
               const response = await fetch(`https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals`)
                   .then((res) => res.json())

               setState(response)
           }


           useEffect(() => {
               getApiData()
           },[])

    const storeOnValue = (event) => { // store in value of input

        valueName = event.target.value;
    }

    const saveProduct = () => { //save product in api
        if(valueName !== ""){
            const arrProduct = state;
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({ name: valueName })
            };

            fetch("https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals",requestOptions)

            // eslint-disable-next-line react-hooks/rules-of-hooks
                getApiData()

        }

    }




        return (

            <div className="container">
                <div>
                    <input type="text" placeholder="Enter name of products" value={valueName} onChange={storeOnValue}/>
                    <button onClick={saveProduct}>OK</button>
                </div>
                <div className="title">
                    <h1>Our juice products</h1>
                </div>
                <div className="row">
                    {
                        state.map((element, index) => (
                            <div className="cart">
                                <div className="image">
                                    <img src={element.image} alt="imageItem"/>
                                </div>
                                <p className="description">{element.name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>


);
}

export default Home;