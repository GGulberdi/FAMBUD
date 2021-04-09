import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpendForm from './SpendForm.js';
import EarningForm from './EarningForm'
import Total from './Total.js';
import '../App.css'

function HomePage({ state, submit , submitDebet}) {
  // console.log(submitDebet)



  return (
    <div>
          <Total state={state}  />
<div class ='debet-credit'>
       
        <div class="card" style={{ width: 18 + 'rem', marginRight: '30px', marginTop: '30px', marginBottom: '30px' }}>
            <img class="card-img-top" style={{ width: 40 + '%', height: 'auto' }} src="grosery.jpg" alt="Card image cap" />
          <div class="card-body">
              <EarningForm submit={submitDebet}/>
          </div>
        </div>

        <div class="card" style={{ width: 18 + 'rem', marginRight: '30px', marginTop: '30px', marginBottom: '30px' }}>
            <img class="card-img-top" style={{ width: 40 + '%', height: 'auto' }} src="grosery.jpg" alt="Card image cap" />
          <div class="card-body">
              <SpendForm submit={submit} />
          </div>
        </div>
</div>
    </div>
  );
}

export default HomePage;
