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
                                        horarios: []
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Leticia Blanco',
                                        numGrupo: '1',
                                        horarios:[]
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
                                        horarios: []
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Peeters',
                                        numGrupo: '1',
                                        horarios:[]
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
                                        horarios:[
                                            {
                                                aula: "691B",
                                                diaPeriodo:'lun-6'
                                            },
                                            {
                                                aula: "691C",
                                                diaPeriodo:'mar-7'
                                            },
                                            {
                                                aula: "692B",
                                                diaPeriodo:'mie-7'
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Leticia Blanco',
                                        numGrupo: '1',
                                        horarios:[
                                            {
                                                aula: "693B",
                                                diaPeriodo:'lun-5'
                                            },
                                            {
                                                aula: "691C",
                                                diaPeriodo:'mar-6'
                                            },
                                            {
                                                aula: "692B",
                                                diaPeriodo:'mie-6'
                                            }
                                        ]
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
                                        horarios:[]
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Peeters',
                                        numGrupo: '1',
                                        horarios:[]
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
            <div className='ml-4' id='calendar'>
                <span className='cabezera'>HORA</span>
                <span className='cabezera'>LUNES</span>
                <span className='cabezera'>MARTES</span>
                <span className='cabezera'>MIERCOLES</span>    
                <span className='cabezera'>JUEVES</span>
                <span className='cabezera'>VIERNES</span>
                <span className='cabezera'>SABADO</span>
                <div className='vacio' id='hora'>6:45</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>7:30</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>8:15</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>9:00</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>9:45</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>10:30</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>11:15</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>12:00</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>12:45</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>13:30</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>14:15</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>15:00</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>15:45</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>16:30</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>17:15</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>18:00</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>18:45</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>19:30</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>20:15</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio' id='hora'>21:00</div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <div className='vacio'></div>
                <section  id='lun-1' className='bg-slate-400'>
                    <p>INTRODUCCION A LA PROGRAMACION </p>
                    <p>Aula: 691 G1</p>
                </section>
                <section id="lun-2" className='bg-slate-500'>INTRO DIA LUNES 2 </section>
                <section id="lun-3" className='lun-3'>INTRO DIA LUNES 3</section>
                <section id="lun-4" className='lun-4'>INTRO DIA LUNES 4 </section>     
                <section id="lun-5" className='lun-5'>INTRO DIA LUNES 5</section>
                <section id="lun-6" className='lun-6'>INTRO DIA LUNES 6 </section>                
                <section id="lun-7" className='lun-7'>INTRO DIA LUNES 7</section>
                <section id="lun-8" className='lun-8'>INTRO DIA LUNES 8 </section>
                <section id="lun-9" className='lun-9'>INTRO DIA LUNES 9</section>
                <section id="lun-10" className='lun-10'>INTRO DIA LUNES 10 </section>       
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
