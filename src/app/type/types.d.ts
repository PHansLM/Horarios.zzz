// src/types/index.d.ts

export type carrerasAgregadas = {
    carrerasA: Carrera[];
  };
  
  export type Carrera = {
    id: number;
    nombreCarrera: string;
    semestres: Semestre[];
  };
  
  export type Semestre = {
    id: number;
    numberSemestre: string;
    materias: Materia[];
  };
  
  export type Materia = {
    id: number;
    nombreMateria: string;
    Docentes: Docente[]
  };
  export type Docente = {
    id: number;
    nombreDocente: string;
    numGrupo: string;
    aula: string;
    horaIni: string;
    horaFin: string;
  }
  