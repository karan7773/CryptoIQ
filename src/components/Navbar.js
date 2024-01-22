import React,{useState,useEffect} from 'react'
import { Button,Menu,Typography,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,MoneyCollectFilled,FundOutlined ,MenuOutlined} from '@ant-design/icons';
import logo from'../images/logo.png'

const Navbar=()=>{
    const [activeMenu,setActiveMenu]=useState(true);
    const [screensize,setScreensize]=useState(null);

    useEffect(()=>{
        const handleResize=()=> setScreensize(window.innerWidth);

        window.addEventListener('resize',handleResize);

        handleResize();

        return ()=>window.removeEventListener('resize',handleResize);
    })

    useEffect(()=>{
        if(screensize<768){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    },[screensize])

    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={logo} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">CryptoIQ</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={()=>setActiveMenu((prev)=>prev=!prev)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>

                    <Menu.Item icon={<MoneyCollectFilled/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}

export default Navbar;