import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../contexts/AppContext";
/* Tabs Library */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./react-tabs.css"; /* Custom styles */

const Profile = () => {
  const { user, filter, setFilter, setIsLoading } = useContext(AppContext);
  const [ tabIndex, setTabIndex ] = useState(0);

  const FilterBy = (index) => {
    const filterBy = index === 0 ? "posts" : "favourites";
    setFilter(filterBy);
    filter !== filterBy && setIsLoading(true);
  }

  return (
  <div className={styles.profile}>
    <img className={styles.username_photo} style={{ borderColor: user.color }} alt="User" src={user.photoURL}></img>
    <span className={styles.username} style={{ backgroundColor: user.color }}>{user.username}</span>

    <Tabs selectedIndex={tabIndex} onSelect={index => {setTabIndex(index); FilterBy(index)}}>
      <TabList>
        <Tab>POSTS</Tab>
        <Tab>FAVORITES</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>

  </div>);
}

export default Profile;