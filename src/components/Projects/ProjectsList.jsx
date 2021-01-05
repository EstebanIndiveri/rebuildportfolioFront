import React, { useMemo } from 'react'
// import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './ProjectCard';
const { heroes } = require("../../data/heroes");

const getHeroesByPublisher = (publisher) => {
const validPublisher=['DC Comics','Marvel Comics']
if(!validPublisher.includes(publisher)){
    throw new Error(`Publisher ${publisher} no es correcto`);
}
return heroes.filter(hero=>hero.publisher===publisher);
}
 

const ProjectsList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    // const heroes=getHeroesByPublisher(publisher);
    return ( 
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero=>(
                    <HeroCard key={hero.id}
                        {...hero}
                        />
                ))
            }
        </div>
     );
}
 
export default ProjectsList;