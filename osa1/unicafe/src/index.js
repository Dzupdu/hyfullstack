import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const StatisticLine = ({text,value, unit}) => {
  return (
      <tr>
        <td>
       {text} {value} {unit}
       </td> 
      </tr>
  )

}

const Statistics = (props) => {
  const good =props.good
  const neutral =props.neutral
  const bad =props.bad
  const all = good + neutral + bad

  if(all === 0){
    return(
    <div>
    <p>No statistics to show</p>
    </div>
    )
  }

  return (
    <div>
    <h2>statistics</h2>
    <table>
    <tbody>
    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <StatisticLine text="all" value ={all} />
    <StatisticLine text="average" value ={(good -bad) /all} />
    <StatisticLine text="positive" value ={100*good/all} unit = "%" />
    </tbody>
    </table>
    </div>
  )
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick = {() => setGood(good + 1)}  text = {"good"}/>
      <Button onClick = {() => setNeutral(neutral + 1)}  text = {"neutral"}/>
      <Button onClick = {() => setBad(bad + 1)}  text = {"bad"}/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)