import React, { useState } from 'react'
import './App.css'

const emojiData = [
  { id: 1, icon: '😺', votes: 0 },
  { id: 2, icon: '😽', votes: 0 },
  { id: 3, icon: '😹', votes: 0 },
  { id: 4, icon: '😼', votes: 0 },
  { id: 5, icon: '😻', votes: 0 },
]

function VotingApp() {
  const [emojis, setEmojis] = useState(emojiData)
  const [champion, setChampion] = useState(null)

  const handleVote = (id) => {
    const updatedEmojis = emojis.map(emoji => {
      
      if (emoji.id === id) {
        return { ...emoji, votes: emoji.votes + 1 }
      }

      return emoji
    })

    setEmojis(updatedEmojis)
  }

  const getResults = () => {
    const highestVotes = Math.max(...emojis.map(emoji => emoji.votes))
    const topEmoji = emojis.find(emoji => emoji.votes === highestVotes)
    
    setChampion(topEmoji)
  }

  return (
    <div className="App">
      <h1>Голосування за найкращий смайлик</h1>
      
      <ul>{emojis.map(emoji => (
        <li key={emoji.id} onClick={() => handleVote(emoji.id)}>
          {emoji.votes}
          <hr></hr>
          {emoji.icon}
        </li>
      ))}
      </ul>
      
      <button onClick={getResults}>Показати результат</button>
      
      {champion && (
        <div>
          <h2>Переможець {champion.icon} з {champion.votes} голосами</h2>
        </div>
      )}

    </div>
  )
}

export default VotingApp