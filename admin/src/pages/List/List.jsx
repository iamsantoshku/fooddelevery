// import React, { useEffect, useState } from 'react'
// import './List.css'
// import axios from 'axios';
// import { toast } from 'react-toastify';
// const List = () => {
//     const [list, setlist] = useState([]);
//     const url = "http://localhost:4000"
//     const fetchlist = async () => {
//         const response = await axios.get(`${url}/api/food/list`)
//         if (response.data.success) {
//             setlist(response.data.data)
//         }
//         else {
//             toast.error("error")
//         }
//     }
//     useEffect(() => {
//         fetchlist();

//     }, [list])

//     return (
//         <div className='list-add flex-col'>
//             <p>All Food List</p>
//             <div className="list-table">
//                 <div className="list-table-format title">
//                     <b>Image</b>
//                     <b>Name</b>
//                     <b>category</b>
//                     <b>Price</b>
//                     <b>Action</b>

//                 </div>
//                 {
//                     list.map((item, index) => {
//                         return (
//                             <div key={index} className="list-table-format">
//                                 <img src={`${url}/images/` + item.image} alt="" />
//                                 <p>{item.name}</p>
//                                 <p>{item.category}</p>
//                                 <p>${item.price}</p>
//                                 {/* <p>'X'</p> */}
//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

// export default List

import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);
  // const url = 'http://localhost:4000';

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      toast.error('Network error');
    }
  };
  const removefood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error('error')
    }

  }

  useEffect(() => {
    fetchList();
  }, []); // The dependency array is empty

  return (
    <div className="list-add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list && list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <h5>{item.category}</h5>
              <h5 onClick={()=>removefood(item._id)}>${item.price}</h5>
              <h4>X</h4>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default List;

