import { FaHeart } from 'react-icons/fa';
import './App.css';

const App=()=>{
  return(
    <div className='all'>
      <section className='navbar'>
        <div className='logo'>
         <h1>Logo</h1><p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='buttons'>
          <button className='btn btn-outline-primary'>About Us</button>
          <button className='btn btn-outline-primary'>Roadmap</button>
          <button className='btn btn-outline-primary'>Register as influencer</button>
          <button className='btn btn-outline-primary'>Register as user</button>
        </div>
      </section>

      <section className='mid-container'>
        <div className='mid'>
          <div className='mid-left'>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat!
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, modi nisi! Voluptatibus explicabo incidunt impedit?</p>
          <div className='mid-rectangle'>
          <p>Lorem ipsum <span><FaHeart/></span> dolor sit amet consectetur &nbsp;</p>
          <button className='mid-button'>Lorem, ipsum.  </button>
          </div>
          
        </div>
        <div className='mid-img'>
        <div className='pic1'><img src="./" alt="." /></div>
        <div className='pic2'></div>
        <div className='pic3'></div>
        <div className='pic4'></div>
        <div className='pic5'></div>
        </div>
        </div>

        <div className='mid-footer'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, <a href='#'>consectetur?</a></p>
        </div>
      </section>
      <br /><br />
      <hr className='line'/>
      
      <section className='footer'>
        <div className='logo-text'>
         <h1>Logo</h1><p>Lorem ipsum dolor sit amet</p><article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, laudantium?</article>
        </div>
        <div className='bottom-buttons'>
          <button className='btn btn-outline-primary'>About Us</button>
          <button className='btn btn-outline-primary'>Roadmap</button>
          <button className='btn btn-outline-primary'>Register as influencer</button>
          <button className='btn btn-outline-primary'>Register as user</button>
        </div>
        <div className='rectangle'>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className='rectangle-button'>Lorem, ipsum.</button>
        </div>
      </section>
      <div className='end'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam.
      </div>
    </div>
  )

}
export default App;
