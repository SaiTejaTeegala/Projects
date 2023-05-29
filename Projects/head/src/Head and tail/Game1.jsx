import React,{useState,Fragment} from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './Game1.css';
const options = [
    {
        id: 0,
        value: "",
        name: "Select a value",

    },
    {
        id: 1,
        value: "H",
        name: "H",
    },
    {
        id: 2,
        value: "T",
        name: "T",
    },
];


const Game1 = () => {
    const[value,setValue]= useState("");
    const [data,setData]= useState([]);
    const [error, setError]= useState("");
    const [hover, setHover]= useState({row:"", col:""});

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handleSubmit= (e)=>{
        e.preventDefault();
        
        if(value) {
            let lastIndex = data.length-1;
            let lastValue =data[lastIndex];

            if(lastValue && lastValue.includes(value)){
                lastValue.push(value);
                setData((prev) => [...prev.slice(0, lastIndex), lastValue]);
                setError("");
            }else{
                setData((prev) => [...prev, [value]]);
                setError("");
            }
        }   else{
            setError("Invalid option, Please Pick any value");
        }
        setValue("");
    };
    const deleteItems = (idx, idy) => {
        let remove= [...data];
        remove[idx].splice(idy, 1);
        setData(remove);
    };
    const getIndex= (idx, idy) => {
        setHover({row: idy + 1, col: idx + 1});
    };
    return(
        <Fragment>
            <h2 className='heading'>Heads and Tails</h2>
            <div className='container p-3'>
                <div className='Game'>
                    <select className='form-select mx-3 w-25' name='game' id='id' onChange={handleChange}>
                        {options.map((option)=>(
                            <option value={option.value} key={option.id} selected={option.name===value}>
                                {option.name}

                            </option>

                        ))}

                    </select>

                    <button className='btn btn-primary mx-2' type='button' onClick={handleSubmit}>
                        Submit

                    </button>
                </div>
                {error && <p className='style1'>{error}</p>}

                <div className='style2'>
                    {data.map((parent,idx) => {
                        return(
                            <div className='flex-column'>
                                {parent.map((child, idy) =>(
                                    <Fragment>
                                        <div onMouseOver={() => getIndex(idx, idy)}>

                                            <div
                                             onClick={() => deleteItems(idx, idy)}>
                                                <div>
                                                <OverlayTrigger
		
		                                           overlay={(props) => (
		                                            <Tooltip {...props} id='deleteItems' type="warning" effect="solid">
                                                        <span>
			                                              {`Delete- row:${hover.row}, col:${hover.col}`}{" "}
                                                        </span>
		                                            </Tooltip>
		                                                  )}>

	                                                       <Button id='btn'>{child}</Button>
	                                            </OverlayTrigger>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </Fragment>
                                ))}
                                
                                    
                            </div>
                        );
                    })}

                </div>
            </div>
            
               
               
        </Fragment>
       
    );
};
export default Game1;