import React, { useCallback } from "react";
import {useNavigate} from "react-router-dom"
import {ButtonComponent, FormCarComponent,} from "../components"
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import "../App.css"
import "./Home.css"



const AutoPage = () =>{
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate ("/",{}, [navigate]));
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[600],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));

      const label = { inputProps: { 'aria-label': 'Color switch demo' } };  


    return(
        <><div>
            <FormCarComponent />
            <br />
            <ButtonComponent infoButton={'Ir a usuarios'} handleOnClick={handleOnClick} />
        </div>
        <div>
                <Switch {...label} defaultChecked />
                <Switch {...label} defaultChecked color="secondary" />
                <Switch {...label} defaultChecked color="warning" />
                <Switch {...label} defaultChecked color="default" />
                <GreenSwitch {...label} defaultChecked />
            </div></>
    )
}

export default AutoPage;