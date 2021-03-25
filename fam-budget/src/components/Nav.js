import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Link} from 'react-router-dom'

function Nav({posts,newPost}) {

  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        {/* <a class="navbar-brand" href="#">
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />FAMBUD
        </a> */}
                    
         <ul className ='nav-bar'>
            <Link to ='/'><li>Home</li></Link>
            <Link to ='/totaldebet'><li>TotalDebet</li></Link>
            <Link to ='/totalcredet'><li>TotalCredet</li></Link>
            <Link to ='/grosery'><li>GroseryAll</li></Link>
            <Link to ='/transport'><li>TransportAll</li></Link>
            <Link to ='/utility'><li>UtilityAll</li></Link>
            <Link to ='/others'><li>OthersAll</li></Link>
        </ul>
      </nav>
      {/* <h1>WELCOME TO FAMILY BUDGET TRACKER</h1> */}
  
    </div>
  );
}

export default Nav;
