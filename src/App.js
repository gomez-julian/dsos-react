import './App.css';
import './feed.css';
import './bootstrap.min.css'
import { Picture } from './components/Picture.jsx';
import { Card } from './components/Card.jsx';
import picture from './images/Megumi.png';
import picture2 from './images/Chigusa.jpg';
import picture3 from './images/Icon3.jpg';
import picture4 from './images/Icon4.jpg';
import picture5 from './images/Icon5.jpg';
import publ from './images/Pic1.jpg';
import publ2 from './images/Pic2.jpg';
import publ3 from './images/Pic3.jpg';
import publ4 from './images/Pic4.jpg';

function App() {
  const a = "ACABO DE VER LA PELÍCULA DE #DOCTOR S3X0! 😱 y en ningún momento el" + 
  " doctor estreñido dice Yo soy el doctor s3x0!"
  const b = "My bro Ariel eat at 3pm o'clock 🎉🐦"
  const c = "La piel es de quien la eriza y la longaniza de quien la pone maciza 🐺"
  const d = "Pero ya vieron el delineado de mi flaca 🛐🛐🛐 sos re lindo"
  return (
      <div>
      <div className="d-flex h-100">
      <Picture srca={ picture } />
      <Picture srca={ picture2 } />
      <Picture srca={ picture3 } />
      <Picture srca={ picture4 } />
      <Picture srca={ picture5 } />
      </div>
      <Card text={a} icon={ picture } pic={ publ } user="suarez_melida"/>
      <Card text={b} icon={ picture2 } pic={ publ2 } user="ariel_icekun"/>
      <Card text={c} icon={ picture3 } pic={ publ3 } user="oaxuan"/>
      <Card text={d} icon={ picture4 } pic={ publ4 } user="sos_relindo"/>
      </div>
  );
}

export default App;
