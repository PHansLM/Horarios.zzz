// ../components/dropCarrera.tsx
import React from 'react';

import { Carrera, carrerasAgregadas } from '../type/types'; 

interface DropPrincipalProps {
  carrera: Carrera;
}

const DropPrincipal: React.FC<DropPrincipalProps> = ({ carrera }) => {
  const { nombreCarrera, semestres } = carrera;

  return (
    <li className="link-parent" >
      <h1 data-dropdown className='bg-sky-400 block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
        {nombreCarrera}
      </h1>
      <ul className="link-child">
        {semestres.map((semestre, index) => (
          <li className="link-parent " key={index}>
            <h1 data-dropdown className='bg-slate-300 block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
              {semestre.numberSemestre}
            </h1>
            <ul className="link-child">
              {semestre.materias.map((materia, i) => (
                <li className="link-parent" key={i}>
                  <h1 data-dropdown className='bg-slate-300 block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
                    {materia.nombreMateria} 
                  </h1>
                  <ul className="link-child">
                    {materia.Docentes.map((docente) => (
                      <li className="link-parent" key={docente.nombreDocente} >
                        <h1 data-dropdownv>
                          {docente.nombreDocente} ({docente.aula}, {docente.horaIni} - {docente.horaFin})
                        </h1>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropPrincipal;

