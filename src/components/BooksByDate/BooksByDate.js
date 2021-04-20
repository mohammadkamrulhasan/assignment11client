import React from 'react';
// import BookDataTable from '../BookDataTable';
import BookShortList from '../BookShortList/BookShortList';


const BooksByDate = ({ appointments }) => {
    return (
        <div>
            <h2 className="text-brand text-center">Bookings</h2>
            {
                appointments.length ?
                 <BookShortList appointments={appointments} ></BookShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Bookings for this Date</h4>
                </div>
            }
        </div>
    );
};

export default BooksByDate;