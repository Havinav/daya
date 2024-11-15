
import './App.css';
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
      <div style={{ backgroundColor: 'white' }}>

        <img src={w1} className='rounded-circle' height='80cm' width='80cm' />
        <b>★彡[ᴅᴀʏᴀᴋᴀʀ ᴡᴇɴᴅꜱ ᴍᴀᴅʜᴜʀɪ]彡★</b>
        <img src={w1} className='rounded-circle' height='80cm' width='80cm' />

      </div>
      <br/>
      <div className='card'>
           kk
      </div>
    </div>
  );
}

export default App;
