import React from 'react';
import './joinPage.css';

function JoinPage(){
    return(
        <div>
                <button className="createList" onclick="Create List "> Create List </button>
                
                <form>
                    <label>
                        Enter List Code:
                        <input type="text" name = "Enter Code"/>
                    </label>
                    
                </form>
        </div>
    )
}



export default JoinPage;