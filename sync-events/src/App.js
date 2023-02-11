import './App.css';
import Navbar from './components/Navbar/navbar.component'
import EventCard from './components/EventCard/eventCard.component';
import Footer from './components/Footer/footer.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EventCard/>
      <Footer/>
    </div>
  );
}

export default App;
