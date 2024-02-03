import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  return (
    <div style={{position:'static', overflow: 'unset'}} > 
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2024-02-03' },
          { title: 'Event 2', date: '2024-02-05' },
      
        ]}
      />
    </div>
  );
}

export default Calendar;