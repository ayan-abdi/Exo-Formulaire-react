const SingleTache = ({tache}) => {

    return (
        <div>
            <div>
            {tache.nom}
            <br />
            {tache?.description}
            </div>
            <div>
                <button>Terminer</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};
export default SingleTache;