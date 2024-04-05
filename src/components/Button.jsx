import React from 'react'
import {useNavigate,useLocation} from "react-router-dom"
const Button = () => {
  const navigate=useNavigate();
  const location=useLocation();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(location.pathname==="/")
    {
      navigate("/interest");
    }else if(location.pathname==="/interest")
    {
      navigate("/RightPlace");
    }
    else if(location.pathname==="/RightPlace")
    {
      localStorage.setItem("rightplace",JSON.stringify(true))
      navigate("/ComfortLevel");
    }
    else if(location.pathname==="/ComfortLevel")
    {
      navigate("/OnTheWay");
    }
    else if(location.pathname==="/OnTheWay")
    {
      localStorage.setItem("ontheway",JSON.stringify(true))
      navigate("/loading");
    }
    
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <button className='border-4 bg-gray-900 text-white p-4 font-bold m-4 w-1/2 hover:bg-sky-500 active:bg-orange-500'>Continue</button>
    </form>

    </div>
  )
}

export default Button