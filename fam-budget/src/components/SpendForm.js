import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class SpendForm extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            storeName:'',
             date:new Date(),
             amount:'',
             desc:'' ,
             section:'grocery'
            };
            this.initialState=this.state;
          console.log(this.state)  
         }

inputHandler =(e)=>{
    console.log(e)

    this.setState({[e.target.name]:e.target.value
        
    })
}


submitHandler =(e)=>{
      e.preventDefault()
    // console.log(this.state)
this.props.submit(this.state)
this.setState(this.initialState)
}

onChange=e=>{
    const selected=e.target.value;
    this.setState({section:selected})
}
render(){
    return (<div>
    <h6 style={{color:'green'}}>Add new SPENDINGS</h6> 
        <form >
           <label>Date<input  onChange={this.inputHandler} value={this.state.data} name='date'type='date'/></label>     
           <label>Name<input onChange={this.inputHandler}  value={this.state.storeName} name= 'storeName' type='text'/></label>
           <label>Paid for<input onChange={this.inputHandler}  value={this.state.desc} name= 'desc' type='text'/></label>
           <label>Sum<input  onChange={this.inputHandler}  value={this.state.amount} name='amount' type='number'/></label> 
           <select onChange={this.onChange}>
               <option value={'grocery'}>Grocery</option>
               <option value={'transport'}>Transport</option>
               <option value={'utility'}>Utility</option>
               <option value={'others'}>Others</option>

           {/* <label>grocery<input  onChange={this.onChange} type='radio'id='grocery'  checked={value==='grocery'} value='grocery'/></label> 
           <label>transport<input onChange={this.onChange} type='radio' id='transport' checked={value==='transport'} value='transport'/></label> 
           <label>utility<input onChange={this.onChange} type='radio' id='utility'  checked={value==='utility'} value='utility'/></label> 
           <label>others<input onChange={this.onChange} type='radio' id='others'  checked={value==='others'} value='others'/></label>  */}
           </select>
             <br/>

           <button onClick={this.submitHandler} type='submit'>ADD</button>    
        </form>
        
    </div> 
     )
 }
}
 
export default SpendForm;