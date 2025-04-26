import React from 'react'
import { useState } from 'react'

function InputSection({AddItem})
{
    const[item, SetItem]=useState("");

    const Check=()=> {
         if (item.trim()=== "") return;
         
            AddItem(item);
            SetItem(""); // clears the input section
         
    }


 
    return  (
        <div className="input-section">
        <input type="text" 
        value={item}
        onChange={(e)=>SetItem(e.target.value)}
        id="todo-input" placeholder="Add a new task..." />
        <button onClick={()=> Check()} id="add-button">Add</button>
         </div>
    )

}
export default InputSection
