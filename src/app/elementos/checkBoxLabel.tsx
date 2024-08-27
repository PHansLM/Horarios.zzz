import React, { useEffect, useState } from 'react';
import { Docente } from '../type/types'; 
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
interface CheckBoxLabelProps {
  docente: Docente;
  nombreMateria: string;
  index: number;
  materiasSeleccionadas: materiasElegidasProps[] | null;
  setMateriasSeleccionadas: React.Dispatch<React.SetStateAction<materiasElegidasProps[]|null>>;
  pilaColor: string[],
  setPilaColor:  React.Dispatch<React.SetStateAction<string[]>>;
  choques: choquesProps[]|null,
  setChoques: React.Dispatch<React.SetStateAction<choquesProps[]|null>>;
}


const CheckBoxLabel: React.FC<CheckBoxLabelProps> = ({ docente, nombreMateria, index,materiasSeleccionadas,setMateriasSeleccionadas,pilaColor, setPilaColor, choques, setChoques}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);

    if (event.target.checked) {
      agregarAMateriasSeleccionadas();
    }else{
      quitarAMateriasSeleccionadas();
    }
  };

  const agregarAMateriasSeleccionadas = () => {
      const newSeleccionado: materiasElegidasProps = {
        docente: docente,
        nombreMateria: nombreMateria,
        index: index,
        color: pilaColor.shift(),
        idUnico:`${docente.nombreDocente}${nombreMateria}${docente.numGrupo}` //habra el mismo docente en una misma materia pero no con el mismo grupo
      };
      const tam = docente.horarios.length;
      let diasPeriodo:string[] = []
      for (let i = 0; i < tam; i++) {
        diasPeriodo.push(docente.horarios[i].diaPeriodo);
      }
      if(choques){
        let bandera = false;
        const tamChoques = choques.length;
        for (let i = 0; i < tamChoques && !bandera; i++) {
          for (let j = 0; j < tam; j++) {
            if(diasPeriodo[j] === choques[i].keyHorarioChoque){
              choques[i].materias.push(newSeleccionado);
              bandera = true;
            }
          }
        }
      }
      if(materiasSeleccionadas){
        const tamMateriasSel = materiasSeleccionadas.length;
        for (let i = 0; i < tamMateriasSel; i++) {
          for (let j = 0; j < tam; j++) {
            const tamHorariosSel = materiasSeleccionadas[i].docente.horarios.length
            for (let k = 0; k < tamHorariosSel; k++) {  
              if(diasPeriodo[j] === materiasSeleccionadas[i].docente.horarios[k].diaPeriodo){
                let bandera = true;
                if(choques){
                  const tamChoques = choques.length;
                  for (let i = 0; i < tamChoques && bandera; i++) {
                      if(diasPeriodo[j] === choques[i].keyHorarioChoque){
                        bandera = false;
                      }
                  }
                }
                if(bandera){
                  const newChoque={            
                    keyHorarioChoque: ''+diasPeriodo[j],
                    materias: [
                      newSeleccionado,
                      materiasSeleccionadas[i]
                    ]
                  }
                  setChoques(prevChoques =>{
                    if(prevChoques && !prevChoques.includes(newChoque)){
                          return [...prevChoques, newChoque]
                    }else{
                      return [newChoque]
                    }
                  })
                }
              }
            }
          }
        }
      }
      setMateriasSeleccionadas(prevSeleccionados => {
        return prevSeleccionados ? [...prevSeleccionados, newSeleccionado] : [newSeleccionado];
      });    
  };
  
  
  const quitarAMateriasSeleccionadas = () => {
    const idUnicoBuscado = `${docente.nombreDocente}${nombreMateria}${docente.numGrupo}`;
    const tam = docente.horarios.length;
    let diasPeriodo:string[] = []
    for (let i = 0; i < tam; i++) {
      diasPeriodo.push(docente.horarios[i].diaPeriodo);
    }
    if(choques){
      console.log(choques)
      const tamChoques = choques.length;
      for (let i = 0; i < tamChoques; i++) {
        for (let j = 0; j < tam; j++) {
          if(diasPeriodo[j] === choques[i].keyHorarioChoque){
            setChoques(prevChoques => {
              return prevChoques? prevChoques.splice(i,1): [];
            });
            console.log(choques)
          }
        }
      }
    }
    setMateriasSeleccionadas(prevSeleccionados => {
      
      const removedColor = prevSeleccionados?.find(seleccionado => seleccionado.idUnico === idUnicoBuscado)?.color;
      if (removedColor) {
        setPilaColor(prevPilaColor => {
          if(!prevPilaColor.includes(removedColor)){
            return [removedColor, ...prevPilaColor]
          }
          return prevPilaColor
        });
      }
      const updatedSeleccionados = prevSeleccionados?.filter(seleccionado => seleccionado.idUnico !== idUnicoBuscado) || null;  
      return updatedSeleccionados;
    });
  };
  return (
    <div>
      <input 
        type="checkbox" 
        className='inline'  
        id={`${docente.nombreDocente}${nombreMateria}${index}`} 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label data-dropdownv className='inline' htmlFor={`${docente.nombreDocente}${nombreMateria}${index}`}>
        {docente.nombreDocente} (G{docente.numGrupo})
      </label>
    </div>
  );
};

export default CheckBoxLabel;


