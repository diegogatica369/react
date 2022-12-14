import React from "react";

const ButtonComponent = ({infoButton, handleOnClick}) => {
    return(
        <div>
            <center>
                <button 
                type="button" 
                class="btn btn-success"
                onClick={()=>{
                    handleOnClick();
                }}
                >{infoButton}</button>
            </center>
        </div>
        
        
    )
}

export default ButtonComponent;