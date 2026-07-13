import React, { useState } from 'react';
import './App.css';
import femaleModelImage1 from './assets/8b5d592b-5471-43dd-bd4c-ee3db031aa3c_2x.png';
import femaleModelImage2 from './assets/new_fitjessie.png';
import logoImage from './assets/maker-logo.png';

/* ─── SVG Wave Background Component ─── */
function WaveBackground() {
  const meshLines = [];

  // Generate a cluster of wavy lines that swoop from top-left to center-right
  // matching the reference image's grid placement.
  for (let i = 0; i < 35; i++) {
    const yStart = i * 15 - 100; // Start lines spreading from the top-left
    
    // We create a cubic bezier curve that swoops down and to the right
    // The curve starts high on the left, dips down in the middle, and goes right
    const startX = -100;
    const startY = yStart;
    
    // Control points to create the swoop
    const cp1X = 300 + i * 10;
    const cp1Y = yStart + 200 + i * 5;
    
    const cp2X = 600 + i * 15;
    const cp2Y = yStart + 400 + i * 10;
    
    const endX = 1200;
    const endY = yStart + 500 + (i * 20);

    // Calculate opacity - fade out lines that are further out
    const opacity = 0.04 + (Math.sin(i / 35 * Math.PI) * 0.06);

    meshLines.push(
      <path
        key={`mesh-line-${i}`}
        className="mesh-line"
        d={`M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`}
        fill="none"
        stroke={`rgba(255, 255, 255, ${opacity.toFixed(3)})`}
        strokeWidth={1 + (i % 4 === 0 ? 0.5 : 0)}
      />
    );
  }

  return (
    <div className="wave-container">
      <svg className="wave-mesh sweep-layer" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {meshLines}
      </svg>
    </div>
  );
}

/* ─── Icon Components (matching the MadFit reference) ─── */
const IconYoutube = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="4"/>
    <polygon points="10,8 16,12 10,16"/>
  </svg>
);
const IconWorkout = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M8 12h8M12 8v8"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
);
const IconRecipe = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3C7.5 3 4 6 4 9c0 2 1 3.5 3 4.5V21h10v-7.5c2-1 3-2.5 3-4.5 0-3-3.5-6-8-6z"/>
    <path d="M9 21h6"/>
  </svg>
);
const IconExclusive = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3"/>
    <polygon points="10,9 15,12 10,15"/>
    <line x1="3" y1="8" x2="21" y2="8"/>
  </svg>
);
const IconProgram = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19c0-3 4-5.5 8-5.5s8 2.5 8 5.5"/>
    <path d="M8 8c0 2 1.8 4 4 4s4-2 4-4-1.8-4-4-4-4 2-4 4"/>
  </svg>
);

/* ─── Main App ─── */
function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('semi-annually');

  return (
    <div className="page-wrapper">
      {/* ━━━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━━━ */}
      <section className="hero-section" id="hero">
        <WaveBackground />

        {/* Logo */}
        <header className="hero-header">
          <div className="logo-wrap">
            <img src={logoImage} alt="FitJessie" className="logo-icon" />
            <span className="logo-text">FITJESSIE</span>
          </div>
        </header>

        {/* Model */}
        <div className="hero-model-wrap">
          <div className="hero-model-card-bg"></div>
          
          {/* Floating UI Badges for Premium Look */}
          <div className="floating-badge badge-left">
            <div className="badge-icon">🔥</div>
            <div className="badge-text">
              <strong>100k+</strong>
              <span>Active Members</span>
            </div>
          </div>
          
          <img
            src={femaleModelImage2}
            alt="Fitness model in yoga pose"
            className="hero-model-img"
          />

          <div className="floating-badge badge-right">
            <div className="badge-stars">⭐⭐⭐⭐⭐</div>
            <div className="badge-text">
              <strong>4.9/5</strong>
              <span>App Store Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ PLANS SECTION ━━━━━━━━━━━━━━━━━━ */}
      <section className="plans-section" id="plans">
        <div className="plans-grid">
          {/* LEFT — Sign Up Free */}
          <div className="plan-column plan-free">
            <h2 className="plan-title">SIGN UP &<br />GET FOR FREE</h2>
            <div className="plan-icons">
              <IconYoutube />
              <IconWorkout />
              <IconRecipe />
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <strong>Unlimited</strong>
                <span>Free YouTube<br/>workouts</span>
              </div>
              <div className="feature-item">
                <strong>7 days</strong>
                <span>Workout activity<br/>tracking</span>
              </div>
              <div className="feature-item">
                <strong>3 days</strong>
                <span>Full access<br/>to all recipes</span>
              </div>
            </div>
            <p className="plan-cta-text">
              Enter your details here to sign up.<br />
              Already have an account? <a href="#" className="link-underline">Log in</a>
            </p>

            {/* Sign Up Form */}
            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <input
                id="fullname-input"
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                id="email-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="password-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="form-hint">The password must be at least 6 characters</p>
              <button id="create-account-btn" type="submit" className="btn-primary">
                CREATE ACCOUNT
              </button>
              <p className="form-terms">
                By signing up you agree to our <a href="#" className="link-underline">Terms & conditions</a>.
              </p>
            </form>
          </div>

          {/* Divider */}
          <div className="plan-divider-wrap">
            <div className="plan-divider"></div>
          </div>

          {/* RIGHT — Subscribe */}
          <div className="plan-column plan-premium">
            <h2 className="plan-title">SUBSCRIBE<br />FOR FULL ACCESS</h2>
            <div className="plan-icons">
              <IconExclusive />
              <IconProgram />
              <IconYoutube />
              <IconWorkout />
              <IconRecipe />
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <strong>700+</strong>
                <span>Exclusive real-<br/>time workouts</span>
              </div>
              <div className="feature-item">
                <strong>25+</strong>
                <span>Programs<br/>and challenges</span>
              </div>
              <div className="feature-item">
                <strong>Unlimited</strong>
                <span>Access to recipes<br/>and tracking</span>
              </div>
            </div>
            <p className="plan-cta-text">
              Choose your plan. Automatically renews at the<br />
              end of subscription period. Cancel anytime.
            </p>

            {/* Pricing Cards */}
            <div className="pricing-cards">
              <label
                className={`pricing-card ${selectedPlan === 'monthly' ? 'selected' : ''}`}
                htmlFor="plan-monthly"
              >
                <input type="radio" id="plan-monthly" name="plan" value="monthly"
                  checked={selectedPlan === 'monthly'}
                  onChange={() => setSelectedPlan('monthly')}
                />
                <div className="pricing-card-inner">
                  <div className="pricing-left">
                    <span className="pricing-label">MONTHLY</span>
                    <div className="pricing-amount">
                      <span className="price">$29.99</span>
                      <span className="per">/MONTH<br /><small>USD</small></span>
                    </div>
                  </div>
                  <div className="pricing-right">
                    <span className="pricing-detail">$29.99 usd<br />billed monthly</span>
                  </div>
                </div>
              </label>

              <label
                className={`pricing-card highlighted ${selectedPlan === 'semi-annually' ? 'selected' : ''}`}
                htmlFor="plan-semi"
              >
                <input type="radio" id="plan-semi" name="plan" value="semi-annually"
                  checked={selectedPlan === 'semi-annually'}
                  onChange={() => setSelectedPlan('semi-annually')}
                />
                <div className="pricing-card-inner">
                  <div className="pricing-left">
                    <span className="pricing-label">SEMI-ANNUALLY</span>
                    <span className="badge">MOST POPULAR <span className="badge-highlight">45% OFF</span></span>
                    <div className="pricing-amount">
                      <span className="price">$16.67</span>
                      <span className="per">/MONTH<br /><small>USD</small></span>
                    </div>
                  </div>
                  <div className="pricing-right">
                    <span className="pricing-detail"><s>$179.94 usd</s> $99.99 usd<br />billed semi-annually</span>
                  </div>
                </div>
              </label>

              <label
                className={`pricing-card ${selectedPlan === 'annually' ? 'selected' : ''}`}
                htmlFor="plan-annual"
              >
                <input type="radio" id="plan-annual" name="plan" value="annually"
                  checked={selectedPlan === 'annually'}
                  onChange={() => setSelectedPlan('annually')}
                />
                <div className="pricing-card-inner">
                  <div className="pricing-left">
                    <span className="pricing-label">ANNUALLY</span>
                    <span className="badge badge-value">BEST VALUE <span className="badge-highlight">58% OFF</span></span>
                    <div className="pricing-amount">
                      <span className="price">$12.50</span>
                      <span className="per">/MONTH<br /><small>USD</small></span>
                    </div>
                  </div>
                  <div className="pricing-right">
                    <span className="pricing-detail"><s>$359.88 usd</s> $149.99 usd<br />billed annually</span>
                  </div>
                </div>
              </label>

              <label
                className={`pricing-card ${selectedPlan === 'lifetime' ? 'selected' : ''}`}
                htmlFor="plan-lifetime"
              >
                <input type="radio" id="plan-lifetime" name="plan" value="lifetime"
                  checked={selectedPlan === 'lifetime'}
                  onChange={() => setSelectedPlan('lifetime')}
                />
                <div className="pricing-card-inner">
                  <div className="pricing-left">
                    <span className="pricing-label">LIFETIME</span>
                    <div className="pricing-amount">
                      <span className="price">$299.99</span>
                      <span className="per-inline">USD</span>
                    </div>
                  </div>
                  <div className="pricing-right">
                    <span className="pricing-detail">$299.99 usd<br />billed once</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
