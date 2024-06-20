import React from 'react';
export default class Classcomp extends React.Component{
    render(){
        return(
            <>
              <div>
                    <h1>hello classcomp</h1>
                    {this.props.name.map(person => (
                        <div key={person.id}>
                            <h2>Name: {person.name}</h2>
                            <p>Age: {person.age}</p>
                        </div>
                    ))}
                </div>
            </>
        )

    };
};