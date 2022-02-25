
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
