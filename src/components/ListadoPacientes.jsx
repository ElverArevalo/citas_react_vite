import React from 'react';

import Pacientes from '../components/Pacientes'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {
         pacientes.length && pacientes ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado
              de pacientes </h2>
            <p className='text-xl  text-center mt-5 mb-10'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>
                Pacientes y citas
              </span>
            </p>
            <Pacientes pacientes={pacientes}
            setPaciente= {setPaciente}
            eliminarPaciente = {eliminarPaciente} />
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay Pacientes
            </h2>
            <p className='text-xl  text-center mt-5 mb-10'>
              Comienza agragando pacientes {''}
              <span className='text-indigo-600 font-bold'>
                y apareceran en este lugar
              </span>
            </p></>
        )
      }
    </div>
  );
}

export default ListadoPacientes;
