import './App.css';
import Cindy_Zacarias from './assets/images/Cindy_Zacarias.png';

function App() {
  return (
    <>
    <h1 className="h1m p-2">Hola, Soy Cindy</h1>
    <img src={Cindy_Zacarias} className="rounded mx-auto d-block img-fluid" alt="CZ" />
    <ul className="list-group">
      <li><a href="https://www.behance.net/cindyzacarias" target="_blank" rel="noopener noreferrer"><i className="bi bi-behance"></i></a></li>
      <li><a href="http://linkedin.com/in/cindy-zacarias" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
      <li><a href="http://github.com/CindyZacarias" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a></li>
      <li><a href="http://instagram.com/cinzastudio" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a></li>
    </ul>
    </>
  );
}

export default App;
