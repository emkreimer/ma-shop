import img from '../../assets/header-icon.svg'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Header = () => {
    return (
        <header className="sticky top-0 z-20 bg-primary border-b border-light-gray h-24">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center ml-5">
                    <button className='pr-10 cursor-pointer'>
                        <MenuIcon />
                    </button>
                    <img src={img} alt="Logo" />
                </div>

                <nav className="flex h-full">
                    <div className="flex items-center h-full hover:bg-medium-gray px-5">
                        <HelpOutlineOutlinedIcon className='mr-2'/>
                        <a href="#">Suporte</a>
                    </div>
                    <div className="flex items-center h-full hover:bg-medium-gray px-5">
                        <CalendarMonthOutlinedIcon className='mr-2'/>
                        <a href="#">Acessar calendário</a>
                    </div>
                    <div className="flex items-center h-full hover:bg-medium-gray px-5">
                        <NotificationsNoneIcon/>
                    </div>
                    <div className="flex items-center h-full hover:bg-medium-gray px-5">
                        <AccountCircleOutlinedIcon className='mr-2'/>
                        <a href="#">Usuário</a>
                    </div>
                        
                </nav>
            </div>
        </header>
    )
}

export default Header;