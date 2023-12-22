import React, { useState, useEffect } from 'react';
import './Login.css';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AuthSlider from '../../components/AuthSlider';
import Loader from '../../components/Loader';
import ModalError from '../../components/ModalError.js';
import { useDispatch, useSelector } from "react-redux";
import { addClient, editClient } from "../../store/action/userAppStorage";

import { useNavigate, useParams } from 'react-router-dom';

function Add({ status }) {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [errorContent, setErrorContent] = useState('')
    const { id } = useParams()


    let { admin, clients } = useSelector(state => state.userAuth)

    let [formState, setFormState] = useState({
        client_name: '',
        client_phone_numbers: '',
        rider_name_no: '',
        chasis_no: '',
        vehicle_reg_no: '',
        tracker_sim_no: '',
        tracker_id: '',
        installation_date: '',
        expiring_date: ' ',
    })


    let navigate = useNavigate()
    let dispatch = useDispatch()

    //checking if user has authenticated to redirect to auth screen
    useEffect(() => {
        if (!admin) {
            navigate('/login')
        }
        //hence no redirect
    }, [])

    useEffect(() => {
        setIsLoading(true)
        if (id) {
            //geting user from redux
            let client = (clients.filter(data => data._id === id)[0])

            setFormState(prev => {
                return {
                    client_name: client.client_name,
                    client_phone_numbers: client.client_phone_numbers,
                    rider_name_no: client.rider_name_no,
                    chasis_no: client.chasis_no,
                    vehicle_reg_no: client.vehicle_reg_no,
                    tracker_sim_no: client.tracker_sim_no,
                    tracker_id: client.tracker_id,
                    installation_date: client.installation_date,
                    expiring_date: client.expiring_date,
                }
            })



        }
        setIsLoading(false)
    }, [])



    let addHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        let res = await dispatch(addClient(formState))
        if (!res.bool) {
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

    let editHandler = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        let res = await dispatch(editClient(id,formState))
        if (!res.bool) {
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



    let changeHandler = (e, type) => {
        if (type === 'client_name') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, client_name: value }
            })
        } else if (type === 'client_phone_numbers') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, client_phone_numbers: value }
            })
        } else if (type === 'rider_name_no') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, rider_name_no: value }
            })
        } else if (type === 'chasis_no') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, chasis_no: value }
            })
        } else if (type === 'vehicle_reg_no') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, vehicle_reg_no: value }
            })
        } else if (type === 'tracker_sim_no') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, tracker_sim_no: value }
            })
        } else if (type === 'tracker_id') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, tracker_id: value }
            })
        } else if (type === 'installation_date') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, installation_date: value }
            })
        } else if (type === 'expiring_date') {
            let value = e.target.value
            setFormState(prev => {
                return { ...prev, expiring_date: value }
            })
        }
    }

    let gotIt = () => {
        setIsError(false)
        setErrorContent('')
        setIsLoading(false)
    }



    return (
        <>
            {isLoading ? <Loader /> : <></>}
            {isError ? <ModalError errorText={errorContent} gotIt={gotIt} /> : <></>}
            <Navigation activeScreen='add' status={true} />
            <AuthSlider status={status} />


            <form className='form' onSubmit={id ? editHandler : addHandler}>

                {id ? <h1>Update Client Information</h1> : <h1>Add up a new client</h1>}



                <label>Client Name</label>

                <input onChange={(e) => changeHandler(e, 'client_name')} value={formState.client_name} required={true}>

                </input>


                <label>Client Phone Number</label>
                <input onChange={(e) => changeHandler(e, 'client_phone_numbers')} value={formState.client_phone_numbers} required={true}>
                </input>



                <label>Rider Name & N0</label>
                <input onChange={(e) => changeHandler(e, 'rider_name_no')} value={formState.rider_name_no} required={true}>
                </input>



                <label>Chasis N0</label>
                <input onChange={(e) => changeHandler(e, 'chasis_no')} value={formState.chasis_no} required={true}>
                </input>

                <label>Vehicle Reg No</label>

                <input onChange={(e) => changeHandler(e, 'vehicle_reg_no')} value={formState.vehicle_reg_no} required={true}>
                </input>



                <label>Tracker Sim No</label>
                <input onChange={(e) => changeHandler(e, 'tracker_sim_no')} value={formState.tracker_sim_no} required={true}>
                </input>

                <label>Tracker ID</label>
                <input onChange={(e) => changeHandler(e, 'tracker_id')} value={formState.tracker_id} required={true}>
                </input>



                <label>Installation Date</label>

                {id?<input onChange={(e) => changeHandler(e, 'installation_date')} value={formState.installation_date} required={true} type='text'>
                </input>:<input onChange={(e) => changeHandler(e, 'installation_date')} value={formState.installation_date} required={true} type='date'>
                </input>}


                <label>Expiry Date</label>

                {id?<input onChange={(e) => changeHandler(e, 'expiring_date')} value={formState.expiring_date} required={true} type='text'>
                </input>:<input onChange={(e) => changeHandler(e, 'expiring_date')} value={formState.expiring_date} required={true} type='date'>
                </input>}

               
                <button>{id ? 'Update Info' : 'Add Client'}</button>



            </form>

            <Footer />



        </>

    );
}

export default Add;