import React from 'react'
import { useState } from 'react'

function Categories({activeButton,completeButton,allButton})
{
      const currentCategory = ["allButton" , "activeButton", "completeButton"];
      const newCategory = [ "newAllbutton" , "newActivebutton", "newCompletebutton"];

    const [all, setAll]= useState(currentCategory[0]);
    const [active, setActive] = useState(currentCategory[1]);
    const [complete,setComplete] = useState(currentCategory[2]);




    return (
        <div class="filters">
            <button className="filter-btn allButton" id={all} data-filter="all"  onClick={ (e)=> { allButton(e)
                const buttonId = e.target.id;
                if (active === newCategory[1])setActive(currentCategory[1])
                if (complete === newCategory[2])setComplete(currentCategory[2])
                if (buttonId === "allButton") setAll(newCategory[0]);
             } }>All</button>

            <button className="filter-btn activeButton" id={active} data-filter="active" onClick={ (e)=> {activeButton(e) 
                const buttonId = e.target.id;
                if (all === newCategory[0]) setAll(currentCategory[0])
                if (complete === newCategory[2])setComplete(currentCategory[2])

                if (buttonId === "activeButton")setActive(newCategory[1])
            } }>Active</button>

            <button className="filter-btn completeButton" id={complete}   data-filter="completed" onClick={ (e)=> { completeButton(e)
                const buttonId = e.target.id;
                if (all === newCategory[0]) setAll(currentCategory[0])
                if (active === newCategory[1])setActive(currentCategory[1])
                if (buttonId === currentCategory[2])setComplete(newCategory[2])

            }
                
             }>Completed</button>
        </div>
    )
}
export default Categories