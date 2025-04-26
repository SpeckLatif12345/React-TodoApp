import React from 'react'


function Total( {taskTotal , totalAll,  totalActive, totalComplete, category} )
{
    
    if (category === "allButton") return (<div class="total" id="total">Total task : {totalAll} </div>)

    else if (category === "completeButton") return (<div class="total" id="total">Total task : {totalComplete} </div>)

    else if ( category ===  "activeButton") return (<div class="total" id="total">Total task : {totalActive} </div> )

    else return   <div class="total" id="total">Total task : {taskTotal} </div>
         
       

    
}

export  default Total