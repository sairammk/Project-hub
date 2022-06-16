// import React, { useState, useEffect } from 'react'
// import "./CSS/ProjectDetails.css";

// const ProjectDetails = () => {

//   const [datas, setDatas] = useState([]);

//   const getDatas = async () => {
//     const response = await fetch('paste api link here...');
//     setUsers(await response.json());
//   }

//   useEffect(() => {
//     getDatas();
//   }, []);

//           return (
//             <>
//            <section className="">
//             {
//              users.map((curElem) => {
//               return (
//                 <div>
//                     <h3 className=""> {name.curElem} </h3>
//                     <p className="">{description.curElem}</p>

//                     <h3 className=""> Objectives </h3>
//                     <p className="" > {overview.curElem} </p>

//                     <h3 className=""> Goals </h3>
//                     <p className=""> {goals.curElem} </p>

//                     <h3 className=""> design Consideration</h3>
//                     <p className=""> {designConsideration.curElem} </p>

//                     <h3 className=""> System Architecture </h3>
//                     <img src={image.curElem} alt="images" />
                    
//                     <h3 className=""> Team </h3>
//                     <p className=""> {teamName.curElem} </p>

//                     <h3 className="">Team Members</h3>

//                     <h3 className=""> Client </h3>
//                     <p className=""> {client.curElem} </p>
//                 </div>
//           );
//         })}
//     </section>
//     </>
//   )
// }
// export default ProjectDetails;