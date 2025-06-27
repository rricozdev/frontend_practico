import React from 'react'
import Sidebar from './Sidebar/Sidebar';

const Layout = ({name}) => {
  return (
    <>
        <Sidebar name={name} />
    </>
)
}

export default Layout;