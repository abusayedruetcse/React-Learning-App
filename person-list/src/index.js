import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Person=({img,name,job,children})=>{
    const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return(
        <article className="person">
            <img src={url} alt="Person Image"/>
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    );
    
}
const PersonList=()=>{
    return (
        <section className="person-list">
            <Person img="50" name="Jafor" job="Developer">
                <p>he is so talented person</p>
            </Person>
            <Person img="52" name="Jamil" job="Researcher"/>
        </section>
    );

}



ReactDOM.render(<PersonList/>,document.getElementById("root"));