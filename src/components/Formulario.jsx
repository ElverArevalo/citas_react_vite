import { useState, useEffect } from "react"
import MensajeError from "./mensajeError";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] = useState('');
    const [propietario, setOropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
       if( Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setOropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
       }
    }, [paciente]);

 
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }



    const handleSubmit = (e) => {
    
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        } 
            setError(false)
          
            const response = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
              
            }
        if(paciente.id){
            response.id = paciente.id;
            const pacienteActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id? response: pacienteState)
            setPacientes(pacienteActualizados)
            setPaciente({})
        }else{
           response.id = generarId();
        setPacientes([...pacientes, response])
    }



        setNombre('')
        setOropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes </h2>

            <p className="text-lg mt-5 text-center mb-10" >Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span></p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" >
                {error &&
                 (<div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"><MensajeError/></div>)}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>

                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setOropietario(e.target.value)} />

                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo electronico</label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Email contacto propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        type="date"
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                        type="text"
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)} />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all "
                    value={!paciente.id ? 'Agregar Paciente':'Editar Paciente'}
                />

            </form>
        </div>
    )
}


export default Formulario