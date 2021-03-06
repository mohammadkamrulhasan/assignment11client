import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../App';
import BooksByDate from '../BooksByDate/BooksByDate';
import Sidebar from '../Sidebar/Sidebar';



const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://shrouded-eyrie-57310.herokuapp.com/BooksByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <BooksByDate appointments={appointments}></BooksByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;