import { useEffect, useState } from 'react';
import './Card.css'

//------------- consumo mi api-------------//
export function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/persona/lista');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('error al consumir la api', error);
    }
  };
//------------- lleno la "CARD" con los atributos-------------//
  return (
    <div id='divMaster' className="row">
      {data.map((props) => (
        <Card key={props.id} nombre={props.nombre} apellido={props.apellido} dni={props.dni} edad={props.edad} rol={props.rol} />
      ))}
    </div>
  );
}
//------------- formato de la card con los props a consumir-------------//
export function Card({ nombre, apellido, edad, rol, dni}) {
  return (

    <div id='div-cliente' className='col-sm-3'>
      <div className="card" styles="width: 18rem;">
        <div id='card-body' className="card-body">
        <h5 id="name-client" className="card-title">{nombre} {apellido}</h5>
        <p className="card-text">{rol}</p>
        <p className="card-text">dni: {dni}</p>
        <p className="card-text">edad: {edad}</p>
        </div>
      </div>
    </div>
  );
}