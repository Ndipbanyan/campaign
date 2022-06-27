import './App.css'
import greenStar from './assets/images/Vectorgreen.svg'
import yellowStar from './assets/images/star2.png'
import whiteStar from './assets/images/star1.png'
import stars from './assets/images/Stars.png'
import logo from './assets/images/Logo.png'
import calendar from './assets/images/calendar.svg'
import greater from './assets/images/greater.svg'
import coinPot from './assets/images/coinpot.png'
import leftCoin from './assets/images/coin left.png'
import rightCoin from './assets/images/coin right.png'
function App() {
	return (
		<div id='container'>
			<div id='greenstar'>
				<img src={greenStar} alt='' />
			</div>
			<div id='yellowstar1'>
				<img src={yellowStar} alt='' />
			</div>
			<div id='whitestar1'>
				<img src={whiteStar} alt='' />
			</div>
			<div id='yellowstar2'>
				<img src={yellowStar} alt='' />
			</div>
			<div id='whitestar2'>
				<img src={whiteStar} alt='' />
			</div>
			<div id='mobile-stars'>
				<img src={stars} alt='' />
			</div>

			<header>
				<div id='logo'>
					<img src={logo} alt='logo' />
				</div>
				<div id='calendar'>
					<div id='header-image'>
						<img src={calendar} alt='calendar' />
					</div>
					<div id='header-date'>
						<span>Day 1</span> of 5
					</div>
				</div>
			</header>
			<main>
				<div id='content-header'>
					<h1>
						<span id='header1'>Unlock to</span> <span id='header2'>Power your dreams!</span>
					</h1>
					<p>
						<span>Stand a chance to win</span> <span>N3,000,000</span> everyday for the next 5 days
					</p>
				</div>

				<div id='content'>
					<p>🚀 How To Play</p>
					<p>1. Guess the right combination of numbers</p>
					<p>
						2. Win <span>N3,000,000</span> instantly
					</p>
					<p>Sounds unbelievable? Well, guess right & see for yourself!</p>
					<p id='light'>
						<span id='light-bulb'>💡</span>{' '}
						<span>
							Think well before you guess. You have only <span id='attempts'>2</span> attempts per day and even after you win,
							you can come back the next day to try for another jackpot!
						</span>
					</p>
				</div>
				<button>
					Play The Game{' '}
					<span>
						<img src={greater} alt='' />
					</span>
				</button>
			</main>
			<footer>
				<div id='ray-box'>
					<div className='rays '></div>
				</div>

				<div id='coins'>
					<div id='coinpot'>
						<img src={coinPot} alt='' />
					</div>
					<div id='leftcoin'>
						<img src={leftCoin} alt='' />
					</div>
					<div id='rightcoin'>
						<img src={rightCoin} alt='' />
					</div>
				</div>

				<div className='circle-container'>
					<div className='circle'></div>
				</div>
			</footer>
		</div>
	)
}

export default App
