import react, {useEffect, useState} from 'react';
import './Filter.css';
import Checkbox from './Checkbox'

const Filter = () => {


  
        const [filterVehicle, setFilterVehicle] = useState({
            publicTransport: [],
            motorSharing: [],
            carSharing: [],
        });

    const handleFilterByCar = () => {
        return 
    }
    
     const handleFilterByPT = () => {
         return
    }
     const handleFilterByMotorbike = (props) => {
         return
    }
    console.log(filterVehicle)
    const TP = ['tren', 'metro', 'bus', 'bike' ];
    const MB = 'Cooltra';
    const EC = 'Emov'


    return (
        <form className='filter' >
            <h1>Transporte Público</h1>
            {TP.map((el, i) =>  {
                return(
                    <Checkbox 
                        classname='check'
                        name={el}
                        value={el}
                        label={el}
                    />     
                )
            })}
            <h1>Motocicleta eléctrica</h1>
                <Checkbox 
                    classname='check'
                    name={MB}
                    value={MB}
                    label={MB}
                />        
            <h1>Coches Eléctricos</h1>
                    <Checkbox 
                        classname='check'
                        name={EC}
                        value={EC}
                        label={EC}
                        handleChange={filterVehicle.motorSharing}
                    />
            <button className='filter-button'> Filtrar </button>                   
        </form>
    )
}

export default Filter;