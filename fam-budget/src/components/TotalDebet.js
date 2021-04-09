import React from 'react'


const TotalAll = ({state, deleteItem}) => {
    // console.log(deleteTodoItem)
    
//  let handleClick=(e)=>{
// // e.preventDefault()
//     deleteItem(e)
//  }

    const totalSum=()=>{
        return state.reduce((sum,item)=>sum+item.amount,0)}

    // console.log(state)
    return (  
        <div>
            <h5>Total Earnings </h5>
            <table style={{width:'100%', textAlign:'center'}}>
            <thead>
                <th style={{border: 'solid gray', backgroundColor:'yellow'}}>Date</th>
                <th style={{border: 'solid gray', backgroundColor:'yellow'}}>Name</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Amount</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Description</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Update</th>
                <th style={{border: 'solid gray',backgroundColor:'yellow'}}>Delete</th>

            </thead>   
            <tbody>
                {state.map((item, index)=>{
                    return(
                <tr key={item._id}>
                    <td style={{border: 'solid gray'}}>{item.date}</td>    
                    <td style={{border: 'solid gray'}}>{item.incomefrom}</td>    
                    <td style={{border: 'solid gray'}}>${item.amount}</td>    
                    <td style={{border: 'solid gray'}}>{item.desc}</td>    
                    <td style={{border: 'solid gray'}}><button style={{border: 'none', color:'green'}}>Update</button></td>    
                    <td style={{border: 'solid gray'}}><button type='button' onClick={()=>deleteItem(item._id)} style={{border: 'none', color:'red'}}>Delete</button></td>    
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
 
export default TotalAll;
