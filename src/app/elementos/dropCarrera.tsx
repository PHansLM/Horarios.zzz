// ../components/dropCarrera.tsx
import React from 'react';
import CheckBoxLabel from './checkBoxLabel';
import { Carrera, carrerasAgregadas, Docente } from '../type/types'; 
interface materiasElegidasProps {
  docente: Docente;
  nombreMateria: string;
  index: number;
  color: string | undefined;
  idUnico: string;
}
interface choquesProps {
  keyHorarioChoque: string,
  materias: materiasElegidasProps[]
}
interface DropPrincipalProps {
  carrera: Carrera;
  materiasSeleccionadas: materiasElegidasProps[] | null;
  setMateriasSeleccionadas: React.Dispatch<React.SetStateAction<materiasElegidasProps[]|null>>;
  pilaColor: string[],
  setPilaColor:  React.Dispatch<React.SetStateAction<string[]>>;
  choques: choquesProps[] | null
  setChoques: React.Dispatch<React.SetStateAction<choquesProps[] | null>>;
}

const DropPrincipal: React.FC<DropPrincipalProps> = ({ carrera, materiasSeleccionadas, setMateriasSeleccionadas, pilaColor,setPilaColor, choques, setChoques }) => {
  const { nombreCarrera, semestres } = carrera;

  return (
    <li className="link-parent" >
      <h1 data-dropdown className=' mt-4 bg-sky-400 block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
        {nombreCarrera}
        <svg className='ml-auto transition-transform inline'  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m17 14l-5-5m0 0l-5 5"/></svg>
      </h1>
      <ul className="link-child">
        {semestres.map((semestre, index) => (
          <li className="link-parent " key={index}>
            <h1 data-dropdown className='bg-slate-200 block mt-0.5 mr-4 py-2 px-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
              {semestre.numberSemestre}
              <svg className='ml-auto transition-transform inline'  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m17 14l-5-5m0 0l-5 5"/></svg>
            </h1>
            <ul className="link-child">
              {semestre.materias.map((materia, i) => (
                <li className="link-parent" key={i}>
                  <h1 data-dropdown className='bg-slate-50 block w-72 py-2 px-3 text-md font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
                    {materia.nombreMateria} 
                    <svg className='ml-auto transition-transform inline' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m17 14l-5-5m0 0l-5 5"/></svg>
                  </h1>
                  <ul className="link-child">
                    {materia.Docentes.map((docente, j) => (
                      <li className="link-parent text-sm font-normal hover:text-blue-500" key={`${docente.nombreDocente}${materia.nombreMateria}${j}`} >
                        <CheckBoxLabel 
                          docente={docente} 
                          nombreMateria={materia.nombreMateria} 
                          index={j}
                          materiasSeleccionadas={materiasSeleccionadas}
                          setMateriasSeleccionadas={setMateriasSeleccionadas}
                          pilaColor={pilaColor} 
                          setPilaColor={setPilaColor}
                          choques={choques}
                          setChoques={setChoques}
                          key={j}
                        >

                        </CheckBoxLabel>  
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

