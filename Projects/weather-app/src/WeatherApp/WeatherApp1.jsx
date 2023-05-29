import React,{useState} from 'react';
import './index1.css';

const WeatherApp1 = () => {
    const[temp,setTemp]= useState("");
    const[weather,setWeather]= useState("");
    const changeHandler=(event)=>{
        setTemp(event.target.value)

    }
    const tempDisplay= ()=> {
        if(temp>="30" && temp<="50")
        {
            setWeather("Hot");

        }
        else if(temp>="10" && temp<"30")
        {
            setWeather("Cold");
        }
    }
    return (
        <div>
            <center>
                <div className= "weather">
                    <div className="card-body">
                        <h3 className="card-title">WeatherApp</h3>
                        <br/>
                      
                        <form>
                            <input className="style2" type="text" onChange={changeHandler} name="text" value={temp} placeholder='Enter the Temperature'/>
                            <br/>
                            <br/>
                            <h2 className={weather}>{weather}</h2>
                            
                            <br/>
                             <button className="style1" type="button" onClick={tempDisplay}>Submit</button>
                            
                        </form>


                    </div>

                </div>
            </center>
        </div>
    )
};
export default WeatherApp1;