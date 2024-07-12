"use client";
import React, { useState } from 'react';
import { Carrera, carrerasAgregadas } from '../type/types';
import DropPrincipal from './dropCarrera';
const Body: React.FC = () => {
    // Datos de ejemplo para las opciones del combobox
    const opcionesCarreras = [
        { id: 1, nombre: 'Ingeniería Civil' },
        { id: 2, nombre: 'Ingenieria Informatica' },
        { id: 3, nombre: 'Ingenieria Industrial' },
        { id: 4, nombre: 'Ingenieria Quimica' }
    ];
    //Datos para ejemplo de un json global de carreras
    const [carreras, setCarreras] = useState<carrerasAgregadas>({
        carrerasA: [
            {
                id: 1,
                nombreCarrera: 'Ing. Civil',
                semestres: [
                    {
                        id: 1,
                        numberSemestre: 'Primer Semestre',
                        materias: [
                            {
                                id: 1,
                                nombreMateria: 'Albañil con casco',
                                Docentes: [
                                    {
                                        id: 1,
                                        nombreDocente: 'Leticia Blanco',
                                        numGrupo: '2',
                                        aula: '691B',
                                        horaIni: '',
                                        horaFin: ''
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Leticia Blanco',
                                        numGrupo: '1',
                                        aula: '691A',
                                        horaIni: '',
                                        horaFin: ''
                                    }
                                ]
                            }, {
                                id: 2,
                                nombreMateria: 'Ingles',
                                Docentes: [
                                    {
                                        id: 1,
                                        nombreDocente: 'Benita',
                                        numGrupo: '2',
                                        aula: '691B',
                                        horaIni: '',
                                        horaFin: ''
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Peeters',
                                        numGrupo: '1',
                                        aula: '691A',
                                        horaIni: '',
                                        horaFin: ''
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        id: 2,
                        numberSemestre: 'Segundo Semestre',
                        materias: []
                    },
                    {
                        id: 3,
                        numberSemestre: 'Tercer Semestre',
                        materias: []
                    },
                    {
                        id: 4,
                        numberSemestre: 'Cuarto Semestre',
                        materias: []
                    },
                    {
                        id: 5,
                        numberSemestre: 'Quinto Semestre',
                        materias: []
                    },
                    {
                        id: 6,
                        numberSemestre: 'Sexto Semestre',
                        materias: []
                    },
                    {
                        id: 7,
                        numberSemestre: 'Séptimo Semestre',
                        materias: []
                    },
                    {
                        id: 8,
                        numberSemestre: 'Octavo Semestre',
                        materias: []
                    },
                    {
                        id: 9,
                        numberSemestre: 'Noveno Semestre',
                        materias: []
                    },
                ]
            },
            {

                id: 2,
                nombreCarrera: 'Ing. Informatica',
                semestres: [
                    {
                        id: 1,
                        numberSemestre: 'Primer Semestre',
                        materias: [
                            {
                                id: 1,
                                nombreMateria: 'Introducción a la Programación',
                                Docentes: [
                                    {
                                        id: 1,
                                        nombreDocente: 'Leticia Blanco',
                                        numGrupo: '2',
                                        aula: '691B',
                                        horaIni: '',
                                        horaFin: ''
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Leticia Blanco',
                                        numGrupo: '1',
                                        aula: '691A',
                                        horaIni: '',
                                        horaFin: ''
                                    }
                                ]
                            }, {
                                id: 2,
                                nombreMateria: 'Ingles',
                                Docentes: [
                                    {
                                        id: 1,
                                        nombreDocente: 'Benita',
                                        numGrupo: '2',
                                        aula: '691B',
                                        horaIni: '',
                                        horaFin: ''
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Peeters',
                                        numGrupo: '1',
                                        aula: '691A',
                                        horaIni: '',
                                        horaFin: ''
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        id: 2,
                        numberSemestre: 'Segundo Semestre',
                        materias: []
                    },
                    {
                        id: 3,
                        numberSemestre: 'Tercer Semestre',
                        materias: []
                    },
                    {
                        id: 4,
                        numberSemestre: 'Cuarto Semestre',
                        materias: []
                    },
                    {
                        id: 5,
                        numberSemestre: 'Quinto Semestre',
                        materias: []
                    },
                    {
                        id: 6,
                        numberSemestre: 'Sexto Semestre',
                        materias: []
                    },
                    {
                        id: 7,
                        numberSemestre: 'Séptimo Semestre',
                        materias: []
                    },
                    {
                        id: 8,
                        numberSemestre: 'Octavo Semestre',
                        materias: []
                    },
                    {
                        id: 9,
                        numberSemestre: 'Noveno Semestre',
                        materias: []
                    },
                ]
            },
        ]
    });
    //obtener el tipo de dato de carreras
    // Estado para controlar la carrera seleccionada y mostrar el área de añadir materias
    const [carreraSeleccionada, setCarreraSeleccionada] = useState<Carrera>({
        id: -1,
        nombreCarrera: '',
        semestres: []
    },);
    const [materiaSeleccionada, setMateriaSeleccionada] = useState<string | null>(null);

    // Función para manejar el cambio en la selección de carrera
    const handleChangeCarrera = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const carreraID = parseInt(event.target.value);
        console.log(carreraID);
        const tam = carreras.carrerasA.length;
        const todasLasC = carreras.carrerasA;
        for (let i = 0; i < tam; i++) {
            if (todasLasC[i].id === carreraID) {
                setCarreraSeleccionada(todasLasC[i])
            }
        }
        setMateriaSeleccionada(null); // Reiniciar materia seleccionada al cambiar de carrera
    };

    // Función para manejar el cambio en la selección de materia
    const handleChangeMateria = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const materia = event.target.value;
        setMateriaSeleccionada(materia);

    };

    //Funcion para maanejar la animacion del dropdown junto al gllobal.css
    const handleNavigationClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const currentElement = e.target as HTMLElement;
        if (currentElement.matches('[data-dropdown], [data-dropdown] *')) {
            const parentLi = currentElement.closest("li");
            const parentSVG = currentElement.closest('[data-dropdown]')?.querySelector("svg");
            if (parentLi?.hasAttribute("data-toggle")) {
                parentLi.removeAttribute("data-toggle");
            } else {
                parentLi?.setAttribute("data-toggle", "");
            }
            if (parentSVG?.hasAttribute("data-row")) {
                parentSVG.removeAttribute("data-row");
            } else {
                parentSVG?.setAttribute("data-row", "");
            }
        }
    };

    return (
        <div className="flex container mx-auto mt-4 text-black font-semibold " data-id="menu" onClick={handleNavigationClick}>
            <div className="w-[22%] min-h-screen border-r-2  ">
                <select
                    className="bg-sky-400 block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleChangeCarrera}
                >
                    <option className="bg-white" value="" disabled>
                        Seleccionar carrera
                    </option>
                    {opcionesCarreras.map(carrera => (
                        <option className='bg-white' key={carrera.id} value={carrera.id}>
                            {carrera.nombre}
                        </option>
                    ))}
                </select>
                <hr />
                <ul className="">
                    {carreraSeleccionada.id === -1 ?
                        <div></div>
                        :
                        <DropPrincipal carrera={carreraSeleccionada} />
                    }
                </ul>
            </div>
            <div className='inline mt-10 ml-16'>
                <table id='miTabla'>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miercoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sabado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6:45</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>7:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>8:15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>9:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>9:45</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>10:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>11:15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>12:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>12:45</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>13:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>
                        <tr>
                            <td>14:15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>
                        <tr>
                            <td>15:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>15:45</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>16:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>17:15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>18:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>18:45</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>19:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>

                        <tr>
                            <td>20:15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>
                        <tr>
                            <td>21:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='tdEspecial'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a href="">
                <img src="../imagen.png" alt="imagen" className='h-10 w-10' />
            </a>
            <a href="">
                <img src="../pdfdescargar.png" alt="pdf" className='h-10 w-10 ml-4' />
            </a>

        </div>
    );
};

export default Body;
