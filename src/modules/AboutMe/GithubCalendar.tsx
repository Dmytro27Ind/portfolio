import React, { FC, useState, useEffect } from 'react'
import Calendar from 'react-github-contribution-calendar'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface GithubUserData {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number,
        weeks: []
      }
    }
  }
}

function getDateNow() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate
}

const GithubCalendar: FC = () => {
  const theme = useSelector<RootState>((state) => state.theme.theme)
  const [data, setData] = useState<GithubUserData>();
  const [values, setValues] = useState<any>({});
  const [total, setTotal] = useState<number>(0)
  let until = getDateNow();
  var panelAttributes = { 'rx': 6, 'ry': 6 };
  var panelColorsLm = ['#e4e4e7', '#94a3b8', '#64748b', '#475569', '#334155' ];
  var panelColorsDm = ['#3f3f4688', '#71717a', '#71717a', '#a1a1aa', '#a1a1aa' ];
  var monthLabelAttributes = {
    'style': {
      'fontSize': 11,
      'fill': '#AAA'
    }
  };
  var weekLabelAttributes = monthLabelAttributes;

  useEffect(() => {
    axios.get('https://nodejs-fetch-service.onrender.com/api/portfolio/git/contributions', {
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    })
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    if(data) {
      const { weeks, totalContributions } = data.user.contributionsCollection.contributionCalendar;
      setTotal(totalContributions)
      let temp: any = {}
      weeks.forEach((week: { contributionDays: []}) => {
        week.contributionDays.forEach((day: {date: string, contributionCount: number}) => {
          temp[day.date] = day.contributionCount
        })
      })
      setValues(temp)
    }
  }, [data])

  return (
    <React.Fragment>
      <Calendar
        values={values}
        until={until}
        panelColors={theme === 'dark'? panelColorsDm : panelColorsLm }
        weekLabelAttributes={weekLabelAttributes}
        monthLabelAttributes={monthLabelAttributes}
        panelAttributes={panelAttributes}
      />
      <h3 className='text-lm-secondaryText dark:text-dm-secondaryText text-base md:text-lg mt-6 self-center'>
        Total Contributions {total}
      </h3>
    </React.Fragment>
  )
}

export default GithubCalendar