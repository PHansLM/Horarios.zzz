"use client";
import React, { useEffect, useState } from 'react';
import { Carrera, carrerasAgregadas, Docente, Horario } from '../type/types';
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
                                        horarios:[
                                            {
                                                aula: "693B",
                                                diaPeriodo:'vie-5'
                                            },
                                            {
                                                aula: "691C",
                                                diaPeriodo:'jue-6'
                                            },
                                            {
                                                aula: "692B",
                                                diaPeriodo:'mie-6'
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        nombreDocente: 'Peeters',
                                        numGrupo: '1',
                                        horarios:[
                                            {
                                                aula: "693B",
                                                diaPeriodo:'lun-1'
                                            },
                                            {
                                                aula: "691C",
                                                diaPeriodo:'mar-1'
                                            },
                                            {
                                                aula: "692B",
                                                diaPeriodo:'mie-1'
                                            }
                                        ]
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
    
    interface materiasElegidasProps {
        docente: Docente;
        nombreMateria: string;
        index: number;
        color: string | undefined;
        idUnico: string;
    }
    const [materiasSeleccionadas, setMateriasSeleccionadas] = useState<materiasElegidasProps[] | null>(null)
    const [componentsSelect, setComponentesSelect] = useState<null>(null)
    // Función para manejar el cambio en la selección de carrera
    useEffect(()=>{
        if(materiasSeleccionadas !== null){
            materiasSeleccionadas.map((index)=>{
                
            })
        }
    },[materiasSeleccionadas])

    const handleChangeCarrera = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const carreraID = parseInt(event.target.value);
        const tam = carreras.carrerasA.length;
        const todasLasC = carreras.carrerasA;
        for (let i = 0; i < tam; i++) {
            if (todasLasC[i].id === carreraID) {
                setCarreraSeleccionada(todasLasC[i])
            }
        }
        setMateriasSeleccionadas(null); // Reiniciar materia seleccionada al cambiar de carrera
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
    
    const [pilaColor, setPilaColor] = useState<string[]>( 
    [
        'bg-blue-500',
        'bg-green-400',
        'bg-red-500',
        'bg-yellow-400',
        'bg-purple-500',
        'bg-pink-400',
        'bg-teal-500',
        'bg-indigo-400',
        'bg-orange-500',
        'bg-gray-400'
    ]);
    
    interface choquesProps {
        keyHorarioChoque: string,
        materias: materiasElegidasProps[]
    }
    const [choques, setChoques] = useState<choquesProps[]|null>(null)
    function generarKeyAleatoria(longitud:number) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let key = '';
        const array = new Uint8Array(longitud);
        window.crypto.getRandomValues(array);
      
        for (let i = 0; i < longitud; i++) {
          key += caracteres[array[i] % caracteres.length];
        }
        
        return key;
    }
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
                        <DropPrincipal 
                            carrera={carreraSeleccionada} 
                            materiasSeleccionadas={materiasSeleccionadas} 
                            setMateriasSeleccionadas={setMateriasSeleccionadas}
                            pilaColor = {pilaColor}
                            setPilaColor={setPilaColor}
                            choques={choques}
                            setChoques={setChoques}
                        />
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
                {
                    materiasSeleccionadas === null ? 
                    (
                        <p></p>
                    ) 
                    : 
                    (
                        materiasSeleccionadas.map(data => {
                            return data.docente.horarios.map(info => (
                                <section id={info.diaPeriodo} className={data.color} key={`${data.docente.nombreDocente}${data.nombreMateria}${info.diaPeriodo}`}>
                                    <p>{data.nombreMateria}</p>
                                    <p>AULA: {info.aula} G:{data.docente.numGrupo}</p>
                                </section>
                            ));
                        })
                    )
                }
                {
                    choques === null ? 
                    (
                        <p></p>
                    ) 
                    : 
                    (
                        choques.map(choque => {
                            return <section id={choque.keyHorarioChoque} key={''+generarKeyAleatoria(16)} className="bg-white border-4 border-red-500 p-1"> 
                                {
                                    choque.materias.map(materia =>{
                                        return materia.docente.horarios.map(info=>{
                                            if(choque.keyHorarioChoque === info.diaPeriodo){
                                                return <div key={''+generarKeyAleatoria(16)}>
                                                    <p>{materia.nombreMateria}</p>
                                                    <p>AULA:{info.aula} G:{materia.docente.numGrupo}</p>
                                                </div>
                                            }
                                        });
                                    })
                                }
                            </section>
                        })
                    )
                }
            </div>
            <div className='block ml-2'>
                <a href="">
                    <img src="../imagen.png" alt="imagen" className='h-10 w-10' />
                </a>
                <a href="">
                    <img src="../pdfdescargar.png" alt="pdf" className='h-10 w-10' />
                </a>
            </div>

        </div>
    );
};

export default Body;
