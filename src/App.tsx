import { Route, Link } from 'react-router-dom';
import AlphaFormApp from './AlphaForm';
import BetaFormApp from './BetaForm';
import TestRouter from './testRouter';

const WelcomeApp = () => {
  return (
    <div>
      <h1>Welcome to the Start of your app!</h1>

      <Link to="alpha-form"><button>Alpha Form</button></Link>
      <Link to="beta-form"><button>Beta Form</button></Link>
    </div>
  )
}

function App() {
  return (
    <TestRouter>
      <Route index element={<WelcomeApp />} />
      <Route path='alpha-form/*' element={<AlphaFormApp />} />
      <Route path='beta-form/*' element={<BetaFormApp />} />
    </TestRouter>
  );
}

export default App;
