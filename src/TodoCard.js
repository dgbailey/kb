import React, {useState} from 'react';
import styled from 'styled-components';



export const TodoCard = () =>{

    //state
        //task title
        //task notes
    
    const [taskState, changeTaskState] = useState({name:'Add Name',complete:false});
    //done tasks go to bottom?
    const handleChange = (e) =>{
        let newVal = e.target.value;
        let name = {name:e.target.value}
        changeTaskState({...taskState, ...name});
    }
    const updateStatus = () =>{
        changeTaskState({...taskState,complete:!taskState.complete});
    }

    return(
        <StyledCard className={taskState.complete ? ' completed':''}>
            <h3>{taskState.name}</h3>
            <button onClick={updateStatus}>{`Complete ${taskState.complete}`}</button>
            <input onChange={handleChange} className = 'details' name='title' placeholder='Add name'>

            </input>
            <input className = 'details left' placeholder='Add description'>
                
            </input>

        </StyledCard>


    )







}

const StyledCard = styled.div `
    display:flex;
    flex-direction:column;
    width: 80%;
    height:100px;
    
    margin:5px;

    border:1px solid gray;
    border-radius:5px;

    &.completed{
        background:green;
    }

    .details{
        background:green;
    }

    .details.left{
        background:red;
    }



`