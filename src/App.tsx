
import './App.css'
import './index.css'
import './workoutSlider.css'

import { Banner, Header, About, Workout, Pricing, Community , Faq, Join, Footer} from './components'

const App: React.FC = () => {

  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <Workout />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
