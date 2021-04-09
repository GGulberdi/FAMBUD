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

    <form>
  <div className="form-group">
    <label>Date</label>
    <input  onChange={this.inputHandler} value={this.state.data} name='date'type='date' className="form-control"  placeholder="enter date"/>
  </div>
  <div className="form-group">
    <label>Name</label>
    <input onChange={this.inputHandler}  value={this.state.storeName} name= 'storeName' type='text' className="form-control"  placeholder="name"/>
  </div>
  <div className="form-group">
    <label>Paid for</label>
    <input onChange={this.inputHandler}  value={this.state.desc} name= 'desc' type='text' className="form-control" placeholder="paid for"/>
  </div>
  <div className="form-group">
    <label>Sum</label>
    <input onChange={this.inputHandler}  value={this.state.amount} name='amount' type='number' className="form-control"  placeholder="amount"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Section</label>
    <select  onChange={this.onChange} className="form-control" id="exampleFormControlSelect1">
               <option>select one</option>
               <option value={'grocery'}>Grocery</option>
               <option value={'transport'}>Transport</option>
               <option value={'utility'}>Utility</option>
               <option value={'others'}>Others</option>
    </select>
  </div>
  <button type="submit" onClick={this.submitHandler} class="btn btn-secondary btn-lg btn-block">ADD</button>

</form>


 {/* <form >
           <label>Date<input  onChange={this.inputHandler} value={this.state.data} name='date'type='date'/></label>     
           <label>Name<input onChange={this.inputHandler}  value={this.state.storeName} name= 'storeName' type='text'/></label>
           <label>Paid for<input onChange={this.inputHandler}  value={this.state.desc} name= 'desc' type='text'/></label>
           <label>Sum<input  onChange={this.inputHandler}  value={this.state.amount} name='amount' type='number'/></label> 
           <select onChange={this.onChange}>
               <option value={'grocery'}>Grocery</option>
               <option value={'transport'}>Transport</option>
               <option value={'utility'}>Utility</option>
               <option value={'others'}>Others</option>
          
           </select>
             <br/>

           <button onClick={this.submitHandler} type='submit'>ADD</button>    
        </form>  */}
        
    </div> 
     )
 }
}
 
export default SpendForm;