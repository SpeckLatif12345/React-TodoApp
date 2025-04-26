import { useState } from 'react'
import Categories from './components/Categories';
import InputSection from './components/Input-section';
import Screen from './components/Screen';
import Total from './components/Total';
import './App.css'



function App() {
  const [tasks, setTask] = useState([]);
  const[category, setCategory]= useState("");

  const AddItem = (item)=> {
    setTask(   [...tasks,  { text: item, id:null, complete:"not complete", active:"not active", createdAt:new Date()  }  ] );
  }


  // complete Click
  const completeClick =(event)=>{
    const  getId = event.target.id;
     const buttonId = parseInt(getId);
     const newtask =[...tasks ]
     newtask.map((task)=> {
         if (task.id === buttonId)
         {
             if ( task.complete == "not complete") 
             {
               task.complete = "complete";
               return;
             }
             else return;
         }
     })

     setTask(newtask);
   // console.log("this is the complete-id ", buttonId);
    
  }


// active Click
  const activeClick=(event)=>{
    const  getId = event.target.id;
    const buttonId = parseInt(getId);
    const newtask = [...tasks ]
    newtask.map((task)=> {
      if (task.id === buttonId)
      {
          if ( task.active == "not active") 
          {
            task.active = "active";
            return;
          }
          else return;
      }

      setTask(newtask);


    // console.log("this is the active-id ", buttonId);
  })

}


  // delete Click
  const deleteClick =(event)=>{
    const  getId = event.target.id;
    const buttonId = parseInt(getId);
    const newtask = tasks.filter((task)=> task.id !==buttonId);
    //console.log("this is the delete-id ", buttonId);
    setTask(newtask);
  }

  

  // activeButton
  const activeButton =(event)=>{
    const buttonId = event.target.id;

    if (buttonId === "newActivebutton") return;
   
    setCategory(buttonId);
  }

   // completeButton
  const completeButton =(event)=>{
    const buttonId = event.target.id;
    if (buttonId === "newCompletebutton") return;
    
    setCategory(buttonId);
   
  }

    // allButton
  const allButton =(event)=>{
    const buttonId = event.target.id;
    if (buttonId === "newAllbutton") return;
    


    setCategory(buttonId);
  

  }







  return  (
          <div className='container'>
            <h1>Todo App</h1>
            < InputSection  AddItem={AddItem} />
            < Categories activeButton={activeButton}  completeButton={completeButton}    allButton={allButton} />
            < Screen tasks={tasks}  completeClick={completeClick}  activeClick={activeClick} deleteClick={deleteClick}  category={category}/>
           
             
           
            
          
          </div>
  )

  
}

export default App
