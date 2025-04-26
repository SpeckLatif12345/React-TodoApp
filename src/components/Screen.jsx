import React from 'react'
import TodoItem from './todo-Item/Todo-Item'
import Total from './Total';




function Screen({tasks , completeClick , activeClick, deleteClick , category })
{  
       
    let filteredTasks = [];

    const completeTasks = tasks.filter(task => task.complete === "complete");
    const activeTasks = tasks.filter(task => task.active === "active");
    const totalTask = tasks.length;
    const completeTotal = completeTasks.length;
    const activeTotal = activeTasks.length;
    const allTotal = tasks.length;    

   

    if ( category === "allButton")
    {
        filteredTasks = tasks;

        

    } 

    else if ( category === "completeButton")
    {
        
        filteredTasks = tasks.filter(task => task.complete === "complete");
        

    }

    else if ( category === "activeButton")
    {
        filteredTasks = tasks.filter(task=>task.active === "active");
         

    }

    else 
    {
        filteredTasks = tasks;
        
          
          
    }



    if (category)
        {
    
            if (filteredTasks.length === 0)
                {
                    if ( category === "allButton" )
                    {
                        
                         return <div className="message" id="message">
                                     Your todo list is empty. Add a new task to get started!
                            </div>

                    }
                    
                    return <div className="message" id="message">
                      Select  a  task !!!!! 
                </div>
                }
            
    
        
       else  if (tasks.length === 0)
        {
            return <div className="message" id="message">
            Your todo list is empty. Add a new task to get started!
        </div>
        }
    
    }
    
 

    return (<div>
        <ul className="screen" id="screen"> { 
    filteredTasks.map((task, index)=>(
      < TodoItem task={task} index={index}  key={index} completeClick={completeClick} activeClick={activeClick} deleteClick={deleteClick} category={category}/>) )}
        
      </ul>
       < Total taskTotal={totalTask} totalAll ={allTotal} totalActive ={activeTotal} totalComplete={completeTotal} 
       category = {category} /></div>
      
       )
 
                   
      
}
export default Screen