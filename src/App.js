import './App.css';
import Layout from './components/layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/contactForm';

function App() {
  return (
    <div className="App">
      <Layout />
      <ContactForm/>
    </div>
  );
}

export default App;
