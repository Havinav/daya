
import './App.css';
import w1 from './asserts/w1.jpg'
import d from './asserts/daya.png'
import Details from './Details';
import w2 from './asserts/w2.jpg'

function App() {
  return (
    <div>
      <div className="card" style={{ height: '50px', borderRadius: '10px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginTop: '9px', }}>
          <h4 style={{ color: 'red' }}><b>𝓓𝓪𝔂𝓪𝓴𝓪𝓻 𝔀𝓮𝓷𝓭𝓼 𝓜𝓪𝓭𝓱𝓾𝓻𝓲</b></h4>
        </div>
      </div>
      <br />
      <div class="card mb-3">
      <img src={w2} class="card-img-top" alt="..." height='650cm'/>
       </div> 
     
      <div className='card' >
      <br/> 
        <div>
         <b>Hi</b>,
        </div>
         <div>
          Please save date and come to my wedding 
         </div>
         <div>
          Place : Bodagudipadu
         </div>
      </div>
      <br/>
      <div>
        <Details/>
      </div>
    </div>
  );
}

export default App;
