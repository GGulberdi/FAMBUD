import React from 'react'



const TransportAll = ({state}) => {
   
         const totalSum=()=>{
            return state.filter(item=>item.section==='transport').reduce((sum,item)=>sum+item.amount,0)
    }
    return (  
        <div>
            <h5>TransportAll</h5>
            <table style={{width:'100%', textAlign:'center'}}>
            <thead>
            <th style={{border: 'solid gray', backgroundColor:'yellow'}}>Date</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Name</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Amount</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>description</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Update</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Delete</th>

            </thead>   
            <tbody>
                 {state.filter(item =>item.section==='transport').map(item=>{
                    return(
                <tr>
                     <td style={{border: 'solid gray'}}>{item.date}</td>    
                    <td style={{border: 'solid gray'}}>{item.storeName}</td>    
                    <td style={{border: 'solid gray'}}>${item.amount}</td>    
                    <td style={{border: 'solid gray'}}>{item.desc}</td>    
                    <td style={{border: 'solid gray'}}><button style={{border: 'none', color:'green'}}>Update</button></td>    
                    <td style={{border: 'solid gray'}}><button style={{border: 'none', color:'red'}}>Delete</button></td>    

                </tr>
                 )})}
            </tbody> 
            <tfoot>
            <tr>
                <td style={{border: 'solid gray', backgroundColor:'yellow'}}><strong>TOTAL FOR MONTH:</strong></td>    
                <td style={{border: 'solid gray', backgroundColor:'yellow'}}><strong></strong></td>    
                <td style={{border: 'solid gray', backgroundColor:'yellow'}}><strong>${totalSum()}</strong></td>    
                <td style={{border: 'solid gray', backgroundColor:'yellow'}}><strong>---</strong></td>    
                <td style={{border: 'solid gray', backgroundColor:'yellow'}}><strong>---</strong></td>    
                <td style={{border: 'solid gray', backgroundColor:'yellow'}}><strong>---</strong></td>    

            </tr>
            </tfoot>
                </table>
          
        </div>   
    );
}
 
export default TransportAll;