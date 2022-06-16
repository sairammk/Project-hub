import React, { useState, useEffect } from 'react'

const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, image, description} = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <img src={image} alt="images" className="card-media" />
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </section>
    </>
  )
}
export default MenuCard;

// ------------------------------------------------------------------
// Use below code when you have api ready with its link and note to comment above code

// import React, { useState, useEffect } from 'react'

// const MenuCard = () => {

//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch('paste api link here...');
//     setUsers(await response.json());
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);

//           return (
//             <>
//            <section className="main-card--cointainer">
//             {
//              users.map((curElem) => {
//               return (
//               <div className="card-container" key={id}>
//                 <div className="card ">
//                   <div className="card-body">
//                     <img src={image.curElem} alt="images" className="card-media" />
//                     <h2 className="card-title"> {name.curElem} </h2>
//                     <span className="card-description subtle">{description.curElem}</span>
//                     <div className="card-read">Read</div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//          }
//     </section>
//     </>
//   )
// }
// export default MenuCard;

// ------------------------------------------------------------------
