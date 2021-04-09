import React from 'react'


const TotalAll = ({state, deleteItem, handleUpdate}) => {

   const totalSum=()=>{
   return state.reduce((sum,item)=>sum+item.amount,0)}

   let handleDeleteButton=(e)=>{
    //   console.log(e)
//      deleteItem(e.target.value)
   }

   let handleUpdateButton=(e)=>{
    console.log(e)
     handleUpdate(e.target.value.id)
 }
  


    return (  
        <div>
            <h5>Total Expences</h5>
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
                <tr>
                    <td style={{border: 'solid gray'}}>{item.date}</td>    
                    <td style={{border: 'solid gray'}}>{item.storeName}</td>    
                    <td style={{border: 'solid gray'}}>${item.amount}</td>    
                    <td style={{border: 'solid gray'}}>{item.desc}</td>    
                    <td style={{border: 'solid gray'}}><button onClick={handleUpdateButton} style={{border: 'none', color:'green'}}>Update</button></td>    
                    <td style={{border: 'solid gray'}}>
                        <button style={{border: 'none', color:'red'}} onClick={()=> deleteItem(item._id)}>Delete</button></td>    
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
