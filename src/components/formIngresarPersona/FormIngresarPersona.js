import React from "react";
import "./FormIngresarPersona.css";

export function FormIngresarPersona() {
  return (
    <div className="w-full max-w-xs m-auto justify-content-center">
      <div id="container" className="container">
        <h1>Ingresar persona</h1>
        <hr></hr>
            <div id="divMaster" className="form-group">
              <div className="row justify-content-center">
              <div className="col-8">
                <label className="inputNombre">Nombre</label>
                <input type="text" className="form-control" id="inputNombre" placeholder="Ingrese su nombre completo"/>
              </div>
              <div className="col-8">
                <label className="inputApellido">Apellido</label>
                <input type="text" className="form-control" id="inputApellido" placeholder="Ingrese su apellido"/>
              </div>
              <div className="col-8">
                <label className="inputEdad">Edad</label>
                <input type="number" className="form-control" id="inputEdad" placeholder="Ingrese su edad"/>
              </div>
              <div className="col-8">
                <label className="inputDNI">DNI</label>
                <input type="number" className="form-control" id="inputDNI" placeholder="Ingrese su numero de documento"/>
              </div>
              </div>
              </div>
              <div>
                <label className="input mt-3 mb-3">Seleccione el rol de la persona : </label>
                </div> 
              <div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="rol" id="checkRol" value="alumno"/>
                  <label className="form-check-label" for="inlineCheckbox1">Alumno</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="rol" id="checkRol" value="tutor"/>
                  <label className="form-check-label" for="inlineCheckbox2">Tutor</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="rol" id="checkRol" value="docente"/>
                  <label className="form-check-label" for="inlineCheckbox3">Docente</label>
                </div>
              </div>
              <div className="add">
              <button onClick={agregar} type="button" className="btn btn-outline-success" id="btnAgregar">Agregar persona</button>
              </div>
      </div>
    </div>
  );
}


async function agregar(){
  let personaNueva = {
    "id": null,
  "nombre" : document.getElementById("inputNombre").value,
  "apellido" : document.getElementById("inputApellido").value,
  "edad" : parseInt(document.getElementById("inputEdad").value),
  "dni" : parseInt(document.getElementById("inputDNI").value),
  "rol": document.getElementById("checkRol").value
  }
  console.log("se apreto el boton");

  let pNuevo = await fetch('http://localhost:3001/api/persona/agregar' , {
    method : 'POST',
    headers : { 'Content-Type' : 'application/json' },
    body : JSON.stringify(personaNueva)
  });
  let json = await pNuevo.json();  
  console.log(json);
}
