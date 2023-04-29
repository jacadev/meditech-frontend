import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { getName } from "../../Redux/Actions/actions";

const SearchBar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const changeHandler = (event) => {
        setName(event.target.value);
    }

    const searchName = async () => {
        if (name.trim()) {
            dispatch(getName(name))
            setName('');
        } else {
            alert('ingresa un nombre para buscar')
        }
    }

    useEffect(() => {
        console.log('se renderiza el componente searchBar');
    },[])

    return (
        
        <div>
            <input type="text" placeholder="doctor o especialidad" onChange={changeHandler} value={name}/>
            <button onClick={() => searchName()}>buscar</button>
        </div>
        
    )
}

export default SearchBar;