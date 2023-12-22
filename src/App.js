import React, { useEffect, Suspense } from "react"
import { Route, Routes } from 'react-router-dom'
import './App.css'
//importing redux action to log user in initially
import { checkIfIsLoggedIn } from "./store/action/userAppStorage";
import { useDispatch } from "react-redux";
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css"


const Home = React.lazy(() => import('./screen/general_screen/Home'))
const About = React.lazy(() => import('./screen/general_screen/About'))
const Login = React.lazy(() => import("./screen/Admin/Login"))
const Dashboard = React.lazy(() => import("./screen/Admin/Dashboard"))
const Add = React.lazy(() => import("./screen/Admin/Add"))

let suspenseStyle = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  width: '100vw',
  height: '100vh'
}


function App() {
  let dispatch = useDispatch()

  let loadUser =async()=>{
    let res = await dispatch(checkIfIsLoggedIn())
    if(!res.bool){
     throw new Error('an error occured')
    }
    return true
   } 

  useEffect(() => {

    loadUser().then(data=>{
    }).catch(data=>{
    })
    
  }, [loadUser])

  


  

  return (
    <div className="App">

      <Suspense fallback={<div style={suspenseStyle} >
        <Spinner
          size={30}
          color="rgb(20, 40, 56)"
        />
      </div>}>

        <Routes>
          {/* Admin Routes*/}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login status={'login'} />} />
          <Route path='/signup' element={<Login status={'signup'} />} />
          <Route path='/dashboard' element={<Dashboard status={'dashboard'} />} />
          <Route path='/add' element={<Add status={'add'} />} />
          <Route path='/add/:id' element={<Add status={'add'} />} />
          

        </Routes>
      </Suspense>


    </div>

  );
}

export default App;
