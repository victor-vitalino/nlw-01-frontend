import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {FiCheckCircle} from 'react-icons/fi'

// import { Container } from './styles';
import './styles.css'
const Success = () => {
    const history = useHistory();
    useEffect(()=>{
        setTimeout(() => {
            history.push('/')
        }, 3000);
    },[history])
  return (
      <div className="finish-cad">
          <FiCheckCircle color="#34CB79" size={50}/>
          <h2 className="message">Cadastrado com sucesso!</h2>
      </div>
  );
}

export default Success;