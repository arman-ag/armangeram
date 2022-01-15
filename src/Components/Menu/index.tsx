import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalAction, profileAction } from "../../redux/actions";
import MenuItem from "./MenuItem";
import "./menuStyle.scss";

const Menu = () => {

  
  const dispatch = useDispatch()
  const profile:any = useSelector((state:any) => state.profile.profile)
  useEffect(() => {
    dispatch(profileAction.getAllProfile())
  }, [dispatch])
  return (
    <div className="menu">
      <button onClick={() => dispatch(modalAction.open("contact"))} > contact</button>
   { profile.map((item:any,index:number)=><MenuItem profileData={item}  key={item.id}/>)

   }
    
    </div>
  )
};

export default Menu;
