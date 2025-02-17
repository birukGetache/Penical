/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../tabsSlices';

const NavBar = styled.nav`
  background-color: transparent;
  padding: 0;
 display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  overflow-x: auto;
  width:auto;
`;

const Tab = styled.div`
  margin: 10px;
  background-color: ${props => (props.active ? '#CA8A71' : '#ccc')};
  color: ${props => (props.active ? 'white' : '#CA8A71')};
  border: 2px solid ${props => (props.active ? '#CA8A71' : 'transparent')};
  padding: 10px;
  font-size: 1rem;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 10px;
  
  &:hover {
    background-color: #CA8A71;
    color: white;
  }
`;

const Tabs = () => {
  const activeTab = useSelector(state => state.tabs.activeTab);
  const dispatch = useDispatch();
  
  return (
    <NavBar>
      {['All', 'BREAKFAST', 'SALAD', 'PASTRY', 'TORTA', 'PIZZA', 'SANDWICH', 'BURGERS', 'REFRESHERS'].map(tab => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => dispatch(setActiveTab(tab))}
        >
          {tab}
        </Tab>
      ))}
    </NavBar>
  );
};

export default Tabs;
