import React, { FC } from 'react'
import Calendar from 'react-github-contribution-calendar'

const GithubCalendar: FC = () => {
  let until = '2016-06-30';
  let values = {
    '2016-06-23': 1,
    '2016-06-26': 2,
    '2016-06-27': 3,
    '2016-06-28': 4,
    '2016-06-29': 4
  };
  let weekNames = ['s', 'm', 't', 'w', 't', 'f', 's'];
  

  return (
    <Calendar values={values} until={until} weekLabelAttributes={weekNames} monthLabelAttributes={undefined} panelAttributes={undefined} />
  )
}

export default GithubCalendar