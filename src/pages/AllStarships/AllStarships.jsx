import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const AllStarships = () => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
         const fetchAllStarships = async () => {
        const starshipData = await getAllStarships()
        setStarships(starshipData.results)   
        console.log(starshipData) 
        }
        fetchAllStarships()
    }, [])

    return(
        <>
        <div>
        <h1>All Starships</h1>
        <div>
            {starships.map(starship =>
            starship.name
            )}
        </div>
        </div>
        </>
    );
}

export default AllStarships;