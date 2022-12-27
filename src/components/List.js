import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
   {
 
    listx.map((item , idx)=>{
     return  <ListItems valuex={item} index={idx} />
    })
    
   }
  )
}

export default List;
