import SingleTache from '../SingleTache/SingleTache';

const Taches = ({list}) => {
const listTache = list.map((tache,index) =>(
    <SingleTache tache={tache} key={index} />
))
    return(
        <>
        <h2>Liste des taches</h2>
        {listTache}
        </>
    );
}
export default Taches;