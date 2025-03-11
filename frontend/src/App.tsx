import React, { useState, FormEvent } from 'react'
import axios, { AxiosResponse } from 'axios'
import './App.css'

interface ShortenResponse {
  shortUrl: string
}

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response: AxiosResponse<ShortenResponse> = await axios.post('http://localhost:3001/shorten', { url })
      setShortUrl(response.data.shortUrl)
    } catch (error) {
      console.error('Erro ao encurtar URL:', error)
    }
  }

  return (
    <div className="App">
      <h1>Encurtador de URLs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Digite a URL"
        />
        <button type="submit">Encurtar</button>
      </form>
      {shortUrl && (
        <p>
          URL encurtada: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  )
}

export default App