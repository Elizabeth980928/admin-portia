import React, { useState } from "react";
import { db } from "../firebase";

const AddRooms = () => {
  const [name, setName] = React.useState();
  const [location,setLocation] =React.useState();
  const [reviews,setReviews] =React.useState();
 

  const AddRooms = (e) => {
    e.preventDefault();
    db.collection("/rooms").add({
      name:name,
      location:location,
      reviews:reviews
    });
    console.log(name);
  };

  const getroom = (e) => {
    setName(e.target.value);
  };

  const getlocation = (e) => {
    setLocation(e.target.value);
  };
  const getreviews = (e) => {
    setReviews(e.target.value);
  };

  return (
    <>
      <form onSubmit={AddRooms}>

        <input type="text"  onChange={getroom} name = "name" placeholder = " hotel" >
          
        </input>
        <input type="text"  onChange={getlocation} name = "name" placeholder = " location" >
          
        </input>
        <input type="text"  onChange={getreviews} name = "name" placeholder = " reviews" >
          
        
        </input>
        <button type="submit">subb</button>
      </form>
    </>
  );
};
export default AddRooms;

// import { ref, set } from "firebase/database";

// import React, { useState } from "react";
// import { v4 } from "uuid";
// import { useNavigate } from "react-router-dom";

// const AddRooms = () => {
//   const navigate = useNavigate();
//   const uid = v4();

//   const [name, setName] = useState("");

//   const [price, setprice] = useState(0);
//   const [size, setsize] = useState(0);
//   const [bed, setBed] = useState(0);
//   const [bath, setBath] = useState(0);
//   const [location, setLocation] = useState(0);
//   const [image, setImage] = useState("");

//   const addRoomToFirebase = () => {
//     if (name && price && bed && bath && location && image) {
//       set(ref(`hotels/${uid}`), {
//         sys: {
//           id: uid,
//         },
//         fields: {
//           name,
//           slug: uid.toString(),

//           price,
//           size,
//           bed,
//           bath,
//           location,

//           images: [
//             {
//               fields: {
//                 file: {
//                   url: image,
//                 },
//               },
//             },
//           ],
//         },
//       }).then(() => {
//         alert("Room Added!");
//         setName("");
//         setBed("");
//         setBath("");
//         setLocation("");
//         setImage("");

//         //navigate("/rooms");
//       });
//     } else {
//       return alert("Please fill all required fields.");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
//           <div>
//             <h1 className="display-4 text-center">Add Rooms</h1>
//           </div>

//           <div className="row my-4">
//             <div className="col-md-12 col-12 my-auto">
//               <div className="col-md-12 col-12 float-right">
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="name"> Room Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       id="name"
//                       placeholder="name"
//                       required
//                     />

//                     <label htmlFor="price">Price(R)</label>
//                     <input
//                       type="number"
//                       value={price}
//                       onChange={(e) => setprice(e.target.value)}
//                       className="form-control"
//                       required
//                       id="price"
//                       placeholder="Room price"
//                     />

//                     <label htmlFor="price">Size</label>
//                     <input
//                       type="number"
//                       value={size}
//                       onChange={(e) => setprice(e.target.value)}
//                       className="form-control"
//                       required
//                       id="price"
//                       placeholder="Room price"
//                     />

//                     <label htmlFor="price">bed</label>
//                     <input
//                       type="number"
//                       value={bed}
//                       onChange={(e) => setprice(e.target.value)}
//                       className="form-control"
//                       required
//                       id="price"
//                       placeholder="Room price"
//                     />

//                     <label htmlFor="price">bath</label>
//                     <input
//                       type="number"
//                       value={bath}
//                       onChange={(e) => setprice(e.target.value)}
//                       className="form-control"
//                       required
//                       id="price"
//                       placeholder="Room price"
//                     />

//                     <label htmlFor="price">location</label>
//                     <input
//                       type="Text"
//                       value={location}
//                       onChange={(e) => setprice(e.target.value)}
//                       className="form-control"
//                       required
//                       id="price"
//                       placeholder="Room price"
//                     />
//                     <label htmlFor="name"> Room Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       id="name"
//                       placeholder="name"
//                       required
//                     />

//                     <label htmlFor="img4">Upload image</label>
//                     <td>
//                       <input className="file" type="file"></input>
//                     </td>
//                   </div>

//                   <div className="form-group form-check"></div>
//                 </form>
//                 <button
//                   style={{ background: "#ff00ff", color: "white" }}
//                   className="btn btn-block btn-outline-primary"
//                   onClick={addRoomToFirebase}
//                 >
//                   ADD
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddRooms;
