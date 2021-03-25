import React from 'react';



class EarningForm extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            earnings:{
            incomefrom:'',
            date:new Date(),
            amount:'',
            desc:''             }
            };
            this.initialState=this.state
          
         }

inputHandler =(e)=>{

    this.setState({[e.target.name]:e.target.value
        
    })
}


submitHandler =(e)=>{
      e.preventDefault()
this.props.submit(this.state)
this.setState(this.initialState)
}
render(){
    // console.log(this.props)
    return (<div>
    <h6 style={{color:'green'}}>Add new EARNINGS</h6> 
        <form >
           <label>Date<input  onChange={this.inputHandler} value={this.state.data} name='date'type='date'/></label>     
           <label>Earned By<input onChange={this.inputHandler}  value={this.state.storeName} name= 'incomefrom' type='text'/></label>
           <label>Earned For<input onChange={this.inputHandler}  value={this.state.desc} name= 'desc' type='text'/></label>
           <label>Sum<input  onChange={this.inputHandler}  value={this.state.amount} name='amount' type='number'/></label> 
           <button onClick={this.submitHandler} type='submit'>ADD</button>    
        </form>
    </div> 
     )
 }
}
 
export default EarningForm;