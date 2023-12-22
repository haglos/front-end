import React, { useEffect } from 'react';
import TopicHead from './TopicHead';
import './Recoveries.css';
import AOS from 'aos'
import "aos/dist/aos.css";
import { sortByYear } from '../utils/functions';
import { useSelector } from "react-redux";

export const Recoveries = React.memo(() => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })

    let { recoveredClient } = useSelector(state => state.userAuth)


    return (
        <div className='recoveries' data-aos="fade-up">
            <TopicHead headText='OUR RECENT' colorText='RECOVERIES' />

            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>CLIENT NAME</th>
                            <th>CLIENT PHONE NUMBERS</th>
                            <th>RIDER NAME</th>
                            <th>CHASIS NO:</th>
                            <th>VEHICLE REG NO:</th>
                            <th>TRACKER SIM NO</th>
                            <th>TRACKER ID</th>
                            <th>INSTALLATION DATE</th>
                            <th>EXPIRING DATE</th>

                        </tr>

                    </thead>
                    <tbody>
                        {recoveredClient.length > 0 ? sortByYear(recoveredClient).map(data => <tr key={data._id}>
                            <td>{data.client_name}</td>
                            <td>{data.client_phone_numbers} </td>
                            <td>{data.rider_name_no} </td>
                            <td>{data.chasis_no}</td>
                            <td>{data.vehicle_reg_no}</td>
                            <td>{data.tracker_sim_no}</td>
                            <td>{data.tracker_id}</td>
                            <td>{data.installation_date}</td>
                            <td>{data.expiring_date}</td>
                        </tr>) : <></>}


                    </tbody>
                </table>

            </div>

        </div>
    )
})
