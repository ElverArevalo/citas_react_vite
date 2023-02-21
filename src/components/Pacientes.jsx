

import React from 'react';

const Pacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  const eliminar= (id) => {
    debugger
    const confirmar  = confirm('¿Esta seguro que desea eliminar el paciente?')
    if (confirmar) {
      eliminarPaciente(id)
    }
  }

  return (
    <>
    {
     pacientes.map((paciente) => (
   
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'  key = {paciente.id}  >
    
   
    
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
      <span className='font-normal normal-case' >{paciente.nombre}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Prpietario: {''}
      <span className='font-normal normal-case' >{paciente.propietario}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Correo: {''}
      <span className='font-normal normal-case' >{paciente.email}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Alta alta: {''}
      <span className='font-normal normal-case' >{paciente.fecha} </span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
      <span className='font-normal normal-case' >{paciente.sintomas}</span>
    </p>
    <div className='flex justify-between mt-10 '>
    <button
    type= "button"
    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
    onClick={() => setPaciente(paciente)}
    >
     Editar   
    </button>

    <button
    type= "button"
    onClick={() => eliminar(paciente.id)}
    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
     Eliminar   
    </button>
    </div>
   </div>

   )
   )
    }  
    </>
  );
}

export default Pacientes;
