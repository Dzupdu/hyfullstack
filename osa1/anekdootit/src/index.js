import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const len = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(new Array(len).fill(0))

  const SetRandom = (len) => {
    return(
      setSelected(Math.floor(Math.random() * len))
    )
  }
  const Vote = (voted) => {
    const copy = [...points]
    copy[voted] += 1 
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
      {props.anecdotes[selected]}<br></br>
      has {points[selected]} votes<br></br>
      <button onClick={() => Vote(selected)}> vote</button>
      <button onClick={() => SetRandom(len)}> next anecdote</button>
      </p>

      <h1>Anecdote with most votes</h1>
      <p> 
        {anecdotes[points.indexOf(Math.max(...points))]}
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)