import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function App1() {
    const [hover, setHover]= useState({row:"", col:""});

    const getIndex= (idx, idy) => {
        setHover({row: idy + 1, col: idx + 1});
    };
return (
	<div style={{ display: 'block', width: 700, padding: 30 }}>
	<OverlayTrigger
		delay={{ hide: 450, show: 300 }}
		overlay={(props) => (
		<Tooltip {...props} id='happy' type="warning" effect="solid">
			{`Delete- row:${hover.row}, col:${hover.col}`}{" "}
		</Tooltip>
		)}
		placement="bottom"
	><Button variant="warning">Tooltip Button</Button>
	</OverlayTrigger>,
	</div>
);
}
