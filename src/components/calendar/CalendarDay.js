import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-around;
  margin-top: 5px;
  font-weight: 600;

  .col {
    /* background-color: orange; */
    border-bottom: 1px solid gray;
  }
`;




function CalendarDay(props) {


  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let  i = 0; i < 7; i++) {
    days.push(
      <div className='col' key={i}>
        {date[i]}
      </div>
    )
  };

  return (
    <StyledDiv>
      {days}
    </StyledDiv>
  );
}

export default CalendarDay;