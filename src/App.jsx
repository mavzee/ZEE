"use client"

import { useState, useEffect } from "react"
import "./app.css"

export default function App() {
  const [complimentIndex, setComplimentIndex] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [hearts, setHearts] = useState([])
  const [showLovePoem, setShowLovePoem] = useState(false)
  const [showSecret, setShowSecret] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const funnyCompliments = [
    "You're the reason I smile at my phone like an idiot",
    "I'd pause my game for you (and that's saying a lot)",
    "You're the only person I want to share my last french fry with",
    "If you were a vegetable, you'd be a cute-cumber",
    "Are you a parking ticket? Because you've got FINE written all over you",
    "I'd give up my WiFi connection to spend time with you",
    "You're the human version of a warm chocolate chip cookie",
    "I like you more than pizza, and that's serious",
    "You're the only person who looks cute even with a double chin in selfies",
    "My favorite notification is the one that says it's you",
    "You're my favorite reason to lose sleep",
    "I'd hold your hand even if you just ate Cheetos",
    "You're the only one I want to annoy for the rest of my life",
    "I'd choose you over a nap, and that's true love",
    "You make my heart do the thing... you know, the beating extra fast thing",
  ]

  const romanticPoem = [
    "Roses are red,",
    "Violets are blue,",
    "Sugar is sweet,",
    "And so are you...",
    "But roses wilt,",
    "And violets fade,",
    "Sugar packets get stolen at restaurants,",
    "But my love for you will never degrade.",
    "❤️",
  ]

  const createHeart = () => {
    const heart = {
      id: Date.now(),
      left: Math.random() * 100,
      size: 20 + Math.random() * 30,
      animationDuration: 3 + Math.random() * 7,
    }
    setHearts((prevHearts) => [...prevHearts, heart])
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id))
    }, heart.animationDuration * 1000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setComplimentIndex((prevIndex) => (prevIndex + 1) % funnyCompliments.length)
    }, 5000)

    // Create random hearts periodically
    const heartInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createHeart()
      }
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(heartInterval)
    }
  }, [])

  const triggerConfetti = () => {
    setShowConfetti(true)
    setClickCount((prev) => prev + 1)
    for (let i = 0; i < 30; i++) {
      setTimeout(createHeart, i * 200)
    }
    setTimeout(() => setShowConfetti(false), 4000)

    // Show secret message after 3 clicks
    if (clickCount >= 2) {
      setTimeout(() => setShowSecret(true), 1000)
    }
  }

  const toggleLovePoem = () => {
    setShowLovePoem(!showLovePoem)
  }

  return (
    <div className="app-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}

      {showConfetti && <div className="confetti-container"></div>}

      <header className="app-header">
        <div className="header-hearts left">❤️</div>
        <div className="header-content">
          <h1 className="title">My Amazing Girlfriend</h1>
          <p className="subtitle">A scientific study of pure awesomeness</p>
        </div>
        <div className="header-hearts right">❤️</div>
      </header>

      <div className="content">
        <div className="top-section">
          <div className="photo-frame">
            <div className="polaroid">
              <div className="photo-placeholder">
              <img
      src="https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/493910245_23972596765735631_1987114530773946453_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEIWzIpiLpfKLnmeIClJx4-L8EVIFfQbfovwRUgV9Bt-t_j6y2Y-Iyvh0J0mw95oqVQxGm7NfZD6HT-x_cOJ1JN&_nc_ohc=qcYTGtxvErUQ7kNvwG1s0FK&_nc_oc=Adn4dsnTOd0gQZmXIxeQcu7ZVPLkP7MwafiK-1-ICdLbqE01ZPoM9L5tqee5_RaUaMg&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=eNlBaeSTQT_yv50bAo1Wyg&oh=00_AfIj0Zxyaf5NJIIY0xwNsZB0xe4kpgfuPNnBl12BFzw7KQ&oe=68200FC2"
      alt="Your Beautiful Face"
      className="photo"
    />
                <span className="small-text">(or imagine it, I already am)</span>
              </div>
              <div className="caption">The most gorgeous human ever</div>
            </div>
          </div>

          <div className="compliment-box">
            <p className="compliment">{funnyCompliments[complimentIndex]}</p>
            <div className="compliment-indicator">
              {funnyCompliments.map((_, index) => (
                <span key={index} className={`dot ${index === complimentIndex ? "active" : ""}`}></span>
              ))}
            </div>
          </div>
        </div>

        <div className="love-meter-section">
          <h2>Love-O-Meter™</h2>
          <div className="love-meter">
            <div className="meter-labels">
              <span>Like</span>
              <span>Love</span>
              <span>Adore</span>
              <span>Obsessed</span>
              <span>YOU</span>
            </div>
            <div className="meter-bar">
              <div className="meter-fill"></div>
              <div className="meter-indicator"></div>
            </div>
          </div>
          <p className="meter-caption">Scientific measurement of my feelings for you</p>
        </div>

        <div className="reasons-section">
          <h2>Scientific Reasons Why You're Amazing</h2>
          <ul className="reasons-list">
            <li>
              <span className="emoji">🧠</span>
              <span>Your brain is filled with brilliant ideas and random facts that fascinate me</span>
            </li>
            <li>
              <span className="emoji">😂</span>
              <span>Your laugh is my favorite sound in the universe (yes, better than pizza in the oven)</span>
            </li>
            <li>
              <span className="emoji">👀</span>
              <span>Your eyes could make puppies jealous with how adorable they are</span>
            </li>
            <li>
              <span className="emoji">💪</span>
              <span>You're stronger than my WiFi password and that thing is unbreakable</span>
            </li>
            <li>
              <span className="emoji">❤️</span>
              <span>Your heart is bigger than my appetite after skipping lunch</span>
            </li>
            <li>
              <span className="emoji">🌟</span>
              <span>You somehow manage to look perfect even first thing in the morning (it's witchcraft)</span>
            </li>
            <li>
              <span className="emoji">🔥</span>
              <span>You're hotter than the laptop I leave on my bed for too long</span>
            </li>
          </ul>
        </div>

        <div className="two-column-section">
          <div className="pie-chart-section">
            <h2>Girlfriend Quality Analysis</h2>
            <div className="chart-container">
              <div className="pie-chart">
                <div className="slice slice1" title="Cuteness: 30%"></div>
                <div className="slice slice2" title="Intelligence: 30%"></div>
                <div className="slice slice3" title="Humor: 25%"></div>
                <div className="slice slice4" title="Patience (for putting up with me): 15%"></div>
                <div className="chart-center">100% Perfect</div>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="color-box color1"></span>
                  <span>Cuteness</span>
                </div>
                <div className="legend-item">
                  <span className="color-box color2"></span>
                  <span>Intelligence</span>
                </div>
                <div className="legend-item">
                  <span className="color-box color3"></span>
                  <span>Humor</span>
                </div>
                <div className="legend-item">
                  <span className="color-box color4"></span>
                  <span>Patience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <h2>You vs. Other Amazing Things</h2>
            <div className="comparison-item">
              <div className="comparison-label">Puppies</div>
              <div className="comparison-bar">
                <div className="comparison-fill" style={{ width: "85%" }}></div>
              </div>
              <div className="comparison-value">85%</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-label">Pizza</div>
              <div className="comparison-bar">
                <div className="comparison-fill" style={{ width: "90%" }}></div>
              </div>
              <div className="comparison-value">90%</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-label">Sunsets</div>
              <div className="comparison-bar">
                <div className="comparison-fill" style={{ width: "88%" }}></div>
              </div>
              <div className="comparison-value">88%</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-label">YOU</div>
              <div className="comparison-bar">
                <div className="comparison-fill you-fill" style={{ width: "100%" }}></div>
              </div>
              <div className="comparison-value">∞%</div>
            </div>
          </div>
        </div>

        <div className="button-section">
          <button className="love-button" onClick={triggerConfetti}>
            Click For Love Explosion
          </button>
          <button className="poem-button" onClick={toggleLovePoem}>
            {showLovePoem ? "Hide My Poetry" : "Read My Love Poem"}
          </button>
        </div>

        {showLovePoem && (
          <div className="poem-section">
            {romanticPoem.map((line, index) => (
              <p key={index} className="poem-line" style={{ animationDelay: `${index * 0.5}s` }}>
                {line}
              </p>
            ))}
          </div>
        )}

        {showSecret && (
          <div className="secret-message">
            <h3>Secret Message Unlocked!</h3>
            <p>You've discovered my secret message by being persistent (or just click-happy).</p>
            <p className="secret-text">
              I love you more than words can express... but I'm trying anyway with this entire webpage!
            </p>
          </div>
        )}

        <div className="fun-facts">
          <h2>Fun Facts About Us</h2>
          <div className="fact-cards">
            <div className="fact-card">
              <div className="fact-number">Fact #1</div>
              <p>Scientists have confirmed that your smile produces more energy than a solar panel</p>
            </div>
            <div className="fact-card">
              <div className="fact-number">Fact #2</div>
              <p>Our combined awesomeness could power a small country for decades</p>
            </div>
            <div className="fact-card">
              <div className="fact-number">Fact #3</div>
              <p>
                The odds of finding someone as amazing as you are lower than winning the lottery while being struck by
                lightning
              </p>
            </div>
            <div className="fact-card">
              <div className="fact-number">Fact #4</div>
              <p>My heart beats approximately 100,000 times per day, and at least 99,999 of those are for you</p>
            </div>
          </div>
        </div>

        <div className="final-message">
          <h2>In Conclusion...</h2>
          <p>
            You're the best thing that's ever happened to me, and this ridiculous webpage doesn't even begin to express
            how much you mean to me.
          </p>
          <p>But I hope it made you smile, because your smile is my favorite thing in the world.</p>
          <div className="heart-container">
            <div className="big-heart">❤️</div>
          </div>
        </div>
      </div>

      <footer>
        <p>Created with 💖 and questionable coding skills</p>
        <p className="copyright">© Forever Yours (or at least until the WiFi drops)</p>
      </footer>
    </div>
  )
}
