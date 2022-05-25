import React, { useEffect, useState } from "react";
import "../index.css";


//   ************************  Temp Check jsx file   **********************************************        //


//           *************    using react hooks    use state and use effect    ***************          //
const TempCheak = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    //  *****************   fatching this API   *openweathermap.org*  await and async  ***************  //

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5feab7a71a67e9dd79b85a6e0dfdfd7e`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <h1>Whether Check <i class="fas fa-cloud-sun"></i></h1>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        placeholder="Enter City Name"
                        value={search}
                        className="inputItem"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <p className="error"> Oopps ! City not found !</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="place">
                                <i className="fas fa-cloud-sun"></i> {search}
                            </h2>
                            <h1 className="tempreture">
                                {city.temp} °C
                            </h1>
                            <h3 className="min_max">
                                Min : {city.temp_min} °C <br /> Max: {city.temp_max} °C
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default TempCheak;
