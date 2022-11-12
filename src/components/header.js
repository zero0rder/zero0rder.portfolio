import React, { useState } from 'react'
import { MainHeader, BurgerIcon } from './styled'
import Drawer from './drawer'
import BreadCrumb from './breadcrumb'

const Header = ({ viewports }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => setIsOpen(prev => !prev)

    return (
        <MainHeader mobile={viewports.xs ? 'true' : 'false'}>
            <BreadCrumb/>
            <BurgerIcon onClick={() => toggleDrawer()}/>
            <Drawer viewports={viewports} isOpen={isOpen} setOpen={setIsOpen}/>
        </MainHeader>
    )
}

export default Header