
import './App.css';

import Details from './Details';
import w2 from './asserts/w2.jpg'
import w1 from './asserts/w1.jpg'

function App() {
  return (
    <div>
      <div className="card" style={{ height: '50px', borderRadius: '10px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginTop: '9px', }}>
          <h4 style={{ color: 'red' }}><b>𝓓𝓪𝔂𝓪𝓴𝓪𝓻 𝔀𝓮𝓷𝓭𝓼 𝓜𝓪𝓭𝓱𝓾𝓻𝓲</b></h4>
        </div>
      </div>
      <br />
      <div className='card' >

        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={w1} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{color:'orange'}}>Wedding Invitation</h5>
                <h5 class="card-title" style={{color:'blue '}}>Hi everyone,</h5>
                <p class="card-text" style={{color:'green '}}>Please save date and We are so happy to invite you to share the joy and happiness of our wedding day</p>
                <p class="card-text" style={{color:'black '}}>Venue: Bodagudipadu</p>
                <p class="card-text" style={{color:'red '}}>Note: Don't forget bachelor party </p>
              </div>
            </div>
          </div>
        </div>
      </div><br />
      <div class="card mb-3">
        <img src={w2} class="card-img-top" alt="..." height='650cm' />
      </div>
      <br />
      <div>
        <Details />
      </div>
    </div>
  );
}

export default App;
