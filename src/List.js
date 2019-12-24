import React, {useState} from 'react';
import styled from 'styled-components';


import {TodoCard} from './TodoCard';
//list contains todoCards and defaults to 1 card
//list can add more default cards
//list can sort cards by complete vs not complete
//list is column oriented


export const List = () => {

    
    let [numCards,changeNumCards] = useState(1);

    const addCard = () =>{
        changeNumCards(numCards +1);
    }

    return (

       

        <StyledList>
         <button onClick={addCard} className='addcard'>Add Card</button>
            {Array.from(Array(numCards)).map(c => <TodoCard></TodoCard>)}
        </StyledList>
    )



}

const StyledList = styled.div `
        
    height:100%;
    width:200px;
    background:light-gray;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border:1px solid gray;
    overflow-y:scroll;
    margin: 0px 5px;



`