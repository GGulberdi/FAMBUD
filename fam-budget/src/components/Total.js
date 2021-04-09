import React from 'react';



class Total extends React.Component {
    constructor(props) {
        super(props);

           }

           incomes=()=>{
            return this.props.state.incomes.reduce((sum,item)=>sum+item.amount,0)
           }

           expences=()=>{
            return this.props.state.posts.reduce((sum,item)=>sum+item.amount,0)
           }

           
    render() { 
        return( <div>
            <h3 style={{textAlign:'center', color:'green', fontFamily: 'comic sans'}}>MONTHLY FAMILY BUDGET TRACKER</h3> 
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <h4>INCOME <span> ${this.incomes()}</span></h4>     
                <h4>EXPENCES<span> ${this.expences()} </span></h4>     
                <h4>SAVING<span> ${this.incomes()-this.expences() > 0 ?this.incomes()-this.expences():"" } </span></h4>
                <h4>CREDIT<span> ${this.incomes()-this.expences() < 0 ?this.incomes()-this.expences():0}</span></h4>     
                </div>        
            </div>);
    }
}
 
export default Total;