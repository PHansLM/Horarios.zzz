"use client";
import React, { useState } from 'react';

const Body: React.FC = () => {
    // Datos de ejemplo para las opciones del combobox
    const opcionesCarreras = [
        { id: 1, nombre: 'Ingeniería Civil' },
        { id: 2, nombre: 'Ingenieria Informatica' },
        { id: 3, nombre: 'Ingenieria Industrial' },
        { id: 4, nombre: 'Ingenieria Quimica' }
    ];

    // Datos de ejemplo para las materias del combobox
    const materias = [
        'Primer semestre', 'Segundo semestre', 'Tercer semestre', 'Cuarto semestre', 'Quinto semestre'
    ];

    // Estado para controlar la carrera seleccionada y mostrar el área de añadir materias
    const [carreraSeleccionada, setCarreraSeleccionada] = useState<string | null>(null);
    const [materiaSeleccionada, setMateriaSeleccionada] = useState<string | null>(null);

    // Función para manejar el cambio en la selección de carrera
    const handleChangeCarrera = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const carrera = event.target.value;
        setCarreraSeleccionada(carrera);
        setMateriaSeleccionada(null); // Reiniciar materia seleccionada al cambiar de carrera
    };

    // Función para manejar el cambio en la selección de materia
    const handleChangeMateria = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const materia = event.target.value;
        setMateriaSeleccionada(materia);
    };

    return (
        <div className="container mx-auto mt-4 text-black font-semibold">
            <div className="flex items-center">
                <select
                    className="bg-sky-400 block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleChangeCarrera}
                    value={carreraSeleccionada || ''}
                >
                    <option className = "bg-white" value="" disabled>
                        Seleccionar carrera
                    </option>
                    {opcionesCarreras.map(carrera => (
                        <option className='bg-white' key={carrera.id} value={carrera.nombre}>
                            {carrera.nombre}
                        </option>
                    ))}
                </select>
            </div>
            {carreraSeleccionada && (
                <div className="mt-4">
                    <select
                        className="bg-white block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                        onChange={handleChangeMateria}
                        value={materiaSeleccionada || ''}
                    >
                        <option value="" disabled>
                            Añadir materias
                        </option>
                        {materias.map((materia, index) => (
                            <option key={index} value={materia}>
                                {materia}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default Body;
