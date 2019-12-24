import React, {useState} from 'react';
import styled from 'styled-components';
import {List} from './List';

export const Board = () => {

    //state num lists
    //lists
    //add list function
    let [defaultList,changeDefaultList] = useState(1);
    const addList = () =>{
        changeDefaultList(defaultList +1);
    }

    return(


        <StyledBoard>
            <button onClick = {addList} className="newlist">NewList</button>
            {Array.from(Array(defaultList)).map(l => <List></List>)}

        </StyledBoard>
    )

        //daily need to try connect 4


}

const StyledBoard = styled.div`


    border: 1px solid black;
    min-width:1200px;
    height:600px;
    margin:auto;
    overflow-x:scroll;
    display:flex;
    justify-content:flex-start;
    button:hover{
        cursor:pointer;
    }

`