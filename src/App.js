import React, { useState } from 'react'
import Test from './Test'

function App(props) {

  let separator = ' ';
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const [isToggled, setIsToggled] = useState(false);

  return (
    <>I can say anything I like<br /><br />
      {month < 10 ? `0${month}` : `${month}`} {separator}-{separator} {date} {separator}-{separator} {year}
      <br />
      {(month == 6) && (date == 21) ? `Birthday` : `Have a nice day`}


    </>
  )
}

export default App