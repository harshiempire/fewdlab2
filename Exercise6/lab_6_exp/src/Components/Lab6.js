// import React,{useState,useEffect} from 'react';
// import axios from "axios";

// const Lab6 = () =>{
//     const city="Hyderabad";
//     const apiKey = '61a1d8419f9d307924240958d89e284d';
//     const [weather,setWeather] = useState(null);
//     const [isLoading,setLoading] = useState(true);
//     const [error,setError] = useState(false);

//     useEffect(()=>{
//         const fetchWeather=async()=>{
//             try {
//                 const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//                 setWeather(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         }

//         fetchWeather();
//     },[]);

//     if(isLoading){
//         return(
//             <p>Wait for some time, Data is Loading!!</p>
//         )
//     }

//     if(error) {
//         return(
//             <p>Error fetching data, please try again later!! : {error.message}..</p>
//         )
//     }

//     return(
//         <div>
//             <h3>Weather in {weather.name}</h3>
//             <p>Temperature : {(weather.main.temp -273.15).toFixed(2)} Celcius</p>
//             <p>Condition : {weather.weather[0].description}</p>
//         </div>
//     )
// }

// export default Lab6;

    import React,{useState,useEffect} from 'react';
    import axios from "axios";

    const Lab6=()=>{
        const [weather,setWeather] = useState("");
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState("");
        const city = "Hyderabad";
        const apiKey = '61a1d8419f9d307924240958d89e284d';

        useEffect(()=>{
            const fetchWeather = async()=>{
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
                    setWeather(response.data);
                    setLoading(false);
                } catch (e){
                    setError(e.message);
                    setLoading(false);
                }
            }

            fetchWeather();
        },[]);

        if(loading){
            return(
                <p>Loading</p>
            )
        }

        if(error){
            return(
                <p>Error: {error}</p>
            )
        }

        return(
            <div>
                <h3>Weather in {weather.name}</h3>
                <p>Temparature is: {(weather.main.temp-273.15).toFixed(2)}</p>
                <p>Condition is: {weather.weather[0].description}</p>
            </div>
        )

    }

    export default Lab6;