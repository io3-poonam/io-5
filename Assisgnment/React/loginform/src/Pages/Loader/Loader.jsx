import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import "./style.css"
const Loader=()=>{
    return <>
<Spinner animation="border" variant="primary"  className='loader'/>
    </>
}
export default Loader;
