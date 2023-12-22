import React, {useState } from 'react';
import './Login.css';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AuthSlider from '../../components/AuthSlider';
import Loader from '../../components/Loader';
import ModalError from '../../components/ModalError.js';
import { signup,login } from "../../store/action/userAppStorage";
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';



function Login({ status }) {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [errorContent, setErrorContent] = useState('')
    let [formState,setFormState] = useState({
        username:'',
        password:'',
        confirmPassword:'',
        secretKey:'',
    })

    let navigate = useNavigate()


    let dispatch = useDispatch()


    let signupHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let res = await dispatch(signup(formState))
        if(!res.bool){
            // an error ocured
            setIsLoading(false)
            setIsError(true)
            setErrorContent(res.message)
            return
        }
        setIsLoading(false)
        //henc navigate to dash board after storing admin in local storage and redux
        navigate('/dashboard')
    
    }

    let loginHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let res = await dispatch(login(formState))
        if(!res.bool){
            // an error ocured
            setIsLoading(false)
            setIsError(true)
            setErrorContent(res.message)
            return
        }
        setIsLoading(false)
        //henc navigate to dash board after storing admin in local storage and redux
        navigate('/dashboard')
        
    

    }



    




    let changeHandler = (e,type)=>{
        if(type === 'username'){
            let value = e.target.value
            setFormState(prev=>{
                return {...prev,username:value}
            })
        }else if(type === 'password'){
            let value = e.target.value
            setFormState(prev=>{
                return {...prev,password:value}
            })

        }else if(type === 'confirmPassword'){
            let value = e.target.value
            setFormState(prev=>{
                return {...prev,confirmPassword:value}
            })
            
        }else if(type === 'secretKey'){
            let value = e.target.value
            setFormState(prev=>{
                return {...prev,secretKey:value}
            })
            
        }
    }

    let gotIt = ()=>{
        setIsError(false)
        setErrorContent('')
        setIsLoading(false)
    }


    return (
        <>
            {isLoading ? <Loader /> : <></>}
            {isError ? <ModalError errorText={errorContent} gotIt={gotIt}/> : <></>}
            <Navigation activeScreen='login' status={true} />
            <AuthSlider status={status} />

            <form className='form' onSubmit={status === 'signup' ?signupHandler:loginHandler}>
                {status === 'signup' ? <h1>SignUp to dashboard</h1> : <h1>Sign In to dashboard</h1>}

                <label>Username</label>
                <input onChange={(e)=>changeHandler(e,'username')} value={formState.username} required={true}>
                </input>

                <label>Password</label>

                <input onChange={(e)=>changeHandler(e,'password')} value={formState.password} required={true}>
                </input>

                {status === 'signup' ? <label>Confirm password</label> : <></>}

                {status === 'signup' ? <input onChange={(e)=>changeHandler(e,'confirmPassword')} value={formState.confirmPassword} required={true}>
                </input> : <></>}

                {status === 'signup' ? <label>Secret key</label> : <></>}

                {status === 'signup' ? <input onChange={(e)=>changeHandler(e,'secretKey')} value={formState.secretKey} required={true} autoCorrect={false}>
                </input>
                    : <></>}

                {status === 'signup' ? <button>Register Now!</button>
                    : <></>}

                {status === 'login' ? <button>Sign In</button>
                    : <></>}

                <label onClick={()=>{alert('sent password to haglos email')}}>forget password</label>

            </form>

            <Footer />
        </>

    );
}

export default Login;