import React, { useState } from 'react';

function MyComponent(){
   
         const [name, setName] = useState();
         const [age, setAge] = useState(0);
         const [isEmployed, setIsEmployed] = useState(false);

         const updateName = () => {

            setName("swoumya");
         }

         const incrementAge = () => {

            setAge(age +1);
         }

         const toggleEmploymentStatus = () => {
               
            setIsEmployed(!isEmployed);

         }


     
         return(
            <div>

                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>set Age</button>

                <p>IsEmployed: {isEmployed ? "yes" : "no"}</p>
                <button onClick={toggleEmploymentStatus}>toggle</button>

            </div>
         );


}
export default MyComponent