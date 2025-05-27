import { useState } from 'react';
import './App.css';
import logoCircle from './assets/images/Logov3.png';
import logoHorizontal from './assets/images/ai4teachers-horizontal-logo.png';

function App() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', { email, firstName });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Reset form
    setEmail('');
    setFirstName('');
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <img src={logoHorizontal} alt="AI4TEACHERS Logo" className="logo" />
          <h1>AI in Education, Made Simple.</h1>
          <p className="subheadline">
            Join 1,000+ educators learning how AI is transforming classrooms — and how you can use it to save time, boost engagement, and spark innovation.
          </p>
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="First Name (Optional)" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <button type="submit" className="cta-button">
              Get the Newsletter
            </button>
            {submitted && <div className="success-message">Thanks for subscribing!</div>}
          </form>
        </div>
      </header>

      {/* What You'll Get Section */}
      <section className="what-you-get">
        <div className="container">
          <h2>What You'll Get</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>A weekly dose of AI tips just for teachers</h3>
              <p>Practical, classroom-ready ideas delivered to your inbox every week.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>Real classroom examples & use cases</h3>
              <p>See how other educators are successfully implementing AI tools.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <h3>Easy-to-implement tools and templates</h3>
              <p>Ready-to-use resources that save you time and effort.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💡</div>
              <h3>No fluff — just practical ideas that work</h3>
              <p>Concise, actionable content focused on real classroom needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="why-it-matters">
        <div className="container">
          <h2>Why It Matters</h2>
          <div className="reasons">
            <div className="reason">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="reason-content">
                <h3>AI is reshaping education</h3>
                <p>From lesson planning to grading, AI tools are transforming how we teach and learn.</p>
              </div>
            </div>
            <div className="reason">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <div className="reason-content">
                <h3>Teachers deserve to understand and use it</h3>
                <p>Without needing a computer science degree, you can harness AI to enhance your teaching.</p>
              </div>
            </div>
            <div className="reason">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="reason-content">
                <h3>Be part of a supportive community</h3>
                <p>Join fellow educators who are learning and growing together in the AI era.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof">
        <div className="container">
          <div className="trust-badge">
            <img src={logoCircle} alt="AI4TEACHERS Badge" className="badge-logo" />
            <p className="trust-text">Trusted by 1,000+ educators and growing weekly</p>
            <div className="instagram-badge">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@ai4teachers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Illustration */}
      <section className="illustration">
        <div className="container">
          <div className="teacher-illustration">
            <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simple teacher with AI elements illustration */}
              <circle cx="100" cy="60" r="30" fill="#4299e1" />
              <rect x="70" y="90" width="60" height="80" rx="5" fill="#4299e1" />
              <circle cx="85" cy="60" r="5" fill="white" />
              <circle cx="115" cy="60" r="5" fill="white" />
              <path d="M90 70 Q100 80 110 70" stroke="white" strokeWidth="2" />
              
              {/* AI elements */}
              <circle cx="140" cy="50" r="15" fill="#f56565" opacity="0.8" />
              <circle cx="150" cy="80" r="10" fill="#f56565" opacity="0.6" />
              <circle cx="130" cy="100" r="12" fill="#f56565" opacity="0.7" />
              
              {/* Connection lines */}
              <line x1="120" y1="50" x2="135" y2="50" stroke="#4299e1" strokeWidth="2" />
              <line x1="120" y1="70" x2="145" y2="80" stroke="#4299e1" strokeWidth="2" />
              <line x1="120" y1="90" x2="125" y2="95" stroke="#4299e1" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to see how AI can help you teach smarter, not harder?</h2>
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="First Name (Optional)" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <button type="submit" className="cta-button">
              Join the List
            </button>
            {submitted && <div className="success-message">Thanks for subscribing!</div>}
          </form>
          
          <p className="privacy-note">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <img src={logoHorizontal} alt="AI4TEACHERS Logo" className="footer-logo" />
          <p>&copy; {new Date().getFullYear()} AI4TEACHERS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
