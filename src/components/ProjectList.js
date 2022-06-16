import React, { useState } from 'react'
import Navbar from './ProjectListFiles/Navbar'
import MenuCard from './ProjectListFiles/MenuCard'
import Menu from './ProjectListFiles/menuApi'
import "./CSS/ProjectList.css";

const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
];

const ProjectList = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
  
    const filterItem = (category) => {
      if (category === "All") {
        setMenuData(Menu);
        return;
      }
  
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
  
      setMenuData(updatedList);
    };
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
        
        {/* <MenuCard />  */}
        {/* use above call to fetch data from API */}
       
    </>
  )
}

export default ProjectList