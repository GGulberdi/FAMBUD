import React from 'react';



class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h3 style={{textAlign:'center', color:'green', fontFamily: 'comic sans'}}>MONTHLY FAMILY BUDGET TRACKER</h3> 
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <h4>INCOME <span> 0 </span></h4>     
                <h4>EXPENCES<span> 0 </span></h4>     
                <h4>SAVING<span> 0 </span></h4>
                <h4>CREDIT<span> 0 </span></h4>     
                </div>        
            </div>);
    }
}
 
export default Total;