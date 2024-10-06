import React from 'react';
import './App.css';
import logo from './betbot.png';
import phoneImage from './phone.png'; // Import the phone image

function App() {

  const Card = ({ title, description }) => {
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        
      </div>
    );
  };
  
  // Handler for Connect to Wallet button
  const connectToWallet = () => {
    alert('Connecting to Wallet...');
    // You can add actual wallet connection logic here, e.g., using web3 or other crypto wallet APIs
  };

  // Handler for Start a Bet button
  const startBet = () => {
    alert('Starting a new bet...');
    // You can add logic here to start a betting flow or navigate to a betting page
  };

  return (
    <div className="landing-page">
      {/* Header with two buttons at the top right */}
      <header>

        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="top-right-button">
          <button className="btn" onClick={connectToWallet}><span>Connect to Wallet</span></button>
        </div>
      </header>
      
      <main className="content-container">
        <div className="text-container">
          <h5 className="top-text" >Hi, Team Bet Bots</h5>
          <h1 className="center-text">Betting Chat Bot</h1>
          <p className="sub-text">
            "Welcome to <b>BetNep</b>, the ultimate betting companion on Telegram!
            Fast, secure, and intuitive. Place bets, track outcomes, and 
            enjoy the thrill of winning with ease. Start betting with <b>BetNep</b> today!"
          </p>
          <button className="bottom-btn" onClick={startBet}>START A BET</button>
        </div>

        {/* Phone image */}
        <div className="phone-image-container">
          <img src={phoneImage} alt="Phone with BetNep app" className="phone-image" />
        </div>
      </main>

      {/* Cards section */}
      <section className="card-container">
        <Card title="Feature 1" description="asdfghjklqwertyuiop" />
        <Card title="Feature 2" description="zxcvbnmqwertyuiop" />
        <Card title="Feature 3" description="asdfghjklqwertyuiop" />
      </section>
    </div>
  );
}

export default App;
