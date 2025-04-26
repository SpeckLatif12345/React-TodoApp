import  React from 'react'
import { useState } from 'react';


function TodoItem({task , index , completeClick , activeClick , deleteClick , category})
{ 

task.id = index;

    
    if (category === "activeButton")
        {
            return  (
                <li className='todo-item'>{
                      
                }
                    
                    <span className='todo-text'>{ task.text}</span>
                    <div className='todo-actions'>{ category !== "activeButton" && (<button className='complete-btn'id={index}  onClick={ (e)=> completeClick(e) }>✓</button>)}
                     { category == "activeButton"  && (<button className='active-task' id={index} onClick={ (e)=> activeClick(e) } >o</button>)}
                    </div>
            
                </li>
                ) 
            
        }




   else  if (category === "completeButton")
        {
            return  (
                    <li className='todo-item'>{
                          
                    }
                        
                        <span className='todo-text'>{ task.text}</span>
                        <div className='todo-actions'>{ category === "completeButton" && (<button className='complete-btn'id={index}  onClick={ (e)=> completeClick(e) }>✓</button>)}
                         { category !== "completeButton"  && (<button className='active-task' id={index} onClick={ (e)=> activeClick(e) } >o</button>)}
                        </div>
                
                    </li>
                    )
                
         }

         

    return (
    <li className='todo-item'>{
          
    }
        
        <span className='todo-text'>{ task.text}</span>
        <div className='todo-actions'>{<button className='complete-btn'id={index}  onClick={ (e)=> completeClick(e) }>✓</button>}
         <button className='active-task' id={index} onClick={ (e)=> activeClick(e) } >o</button>
            <button className='delete-btn' id={index} onClick={ (e)=> deleteClick(e) }>×</button>

        </div>

    </li>
    ) 


}

export default TodoItem