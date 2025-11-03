export default function Home() {
  return (
    <section>
      <h1>Meeting notes that write themselves.</h1>
      <p>Summize listens, summarizes, and gives you action items.</p>
      <div className="actions">
        <a className="btn" href="/dashboard">Try the demo</a>
        <a className="btn outline" href="/pricing">See pricing</a>
      </div>
      <ul className="bullets">
        <li>Upload audio or paste transcript</li>
        <li>Get decisions and tasks</li>
        <li>Share with your team</li>
      </ul>
    </section>
  )
}
