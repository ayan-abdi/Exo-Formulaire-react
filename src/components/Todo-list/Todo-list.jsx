import { useState } from 'react';
import Formulaire from '../Formulaire/Formulaire';
import Taches from '../Taches/Taches';

// une taches: nom oblog, desc, et priorité par defaut
const TodoList = () => {
    const [list, setList] = useState([])

    const updateListTache = (newTache) =>{
        setList(list=>([...list, newTache ]))
    }

    return(
        <>
        <Formulaire updateListTache={updateListTache}/>
        <Taches list={list}/>
        </>
    )

}
export default TodoList;