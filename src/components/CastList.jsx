import { useState } from "react";
import { useEffect } from "react";

const CastList = ({ movieId }) => {

    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=579822ffa7fd55b63567c5fd42294b32&_limit=10`
        )
            .then((response) => response.json())
            .then((data) => {
                const castLimited = data.cast.slice(0, 10);
                console.log(data.cast);
                setCast(castLimited);
            })
            .catch((error) => {
                console.error('Error fetching cast:', error);
            });
    }, [movieId]);

    return (
        <div>
            <h2>Les acteurs</h2>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.cast_id}>
                        {actor.name} as {actor.character}
                    </li>
                ))}
            </ul>
        </div>
    );
            
          
};
export default CastList;