import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import './style.css'

const ButtonOne = (props) => {
  return (
    <div>
      <Button className='m-2' id="buttonNav"><Link to={props.to} id="buttonNavLink">{props.text}</Link></Button>{''}
    </div>
  );
}

export default ButtonOne;