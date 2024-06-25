//import logo from './images/illustration-article.svg';
import logo from "./illustration-article.svg";
import authorimg from "./image-avatar.webp";
import "./App.css";

function App() {
	return (
		<div className="App">
			<img src={logo} className="headerImg" alt="Article illustration" />

			<div>
				<div className="category">Learning</div>

				<div className="publishdate">Published 21 Dec 2023</div>
				<h1>
					<a href="www.twitter.com" rel="noreferrer">
						HTML & CSS foundations
					</a>
				</h1>
				<div>
					These languages are the backbone of every website, defining structure,
					content, and presentation.
				</div>
				<div className="author">
					<img src={authorimg} alt="Author avatar" />
					<div className="authorname">Greg Hooper</div>
				</div>

				{/* <div className="attribution">
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by <a href="www.twitter.com/delfinfb">Delfino </a>.
				</div> */}
			</div>
		</div>
	);
}

export default App;
