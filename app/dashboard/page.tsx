'use client'
import { useState } from 'react'

export default function Dashboard() {
  const [text, setText] = useState('')
  const [out, setOut] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function summarize() {
    setLoading(true)
    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      setOut(data?.summary || 'No summary')
    } catch (e) {
      setOut('Error. Check your OPENAI_API_KEY.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Paste a transcript and click Summarize.</p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste meeting transcript here…"
        rows={10}
      />
      <div className="actions">
        <button className="btn" onClick={summarize} disabled={loading || !text}>
          {loading ? 'Summarizing…' : 'Summarize'}
        </button>
        <button className="btn outline" onClick={() => { setText(''); setOut(null); }}>Clear</button>
      </div>
      {out && (
        <div className="card">
          <h3>Result</h3>
          <p>{out}</p>
        </div>
      )}
    </section>
  )
}
