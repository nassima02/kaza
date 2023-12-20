import logements from '../data/logements.json'
import { redirect } from 'react-router-dom'

export async function loadLogements() {
    // récupération des données des logements
    return { logements }
}

export async function loadLogementById({ params }) {
    // Recherche du logement avec l'ID spécifié dans les données des logements
    const logement = logements.find((logement) => logement.id === params.id)

    if (!logement) {
        // Redirection vers la page d'erreur 404 si le logement n'est pas trouvé
        return redirect('/404')
    }
    // récupération des données du logement avec l'ID spécifié
    return { logement }
}
