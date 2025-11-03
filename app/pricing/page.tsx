'use client'
import { useState } from 'react'

export default function Pricing() {
  const [loading, setLoading] = useState(false)

  async function startCheckout() {
    try {
      setLoading(true)
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data?.url) window.location.href = data.url
      else alert('Checkout failed. Check env vars.')
    } catch (e) {
      alert('Checkout error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <h1>Simple pricing</h1>
      <div className="cards">
        <div className="card">
          <h2>Pro</h2>
          <div className="price">$29/mo</div>
          <ul>
            <li>Unlimited meetings</li>
            <li>Action items + decisions</li>
            <li>Priority processing</li>
          </ul>
          <button className="btn" onClick={startCheckout} disabled={loading}>
            {loading ? 'Redirecting…' : 'Subscribe'}
          </button>
        </div>
      </div>
    </section>
  )
}
