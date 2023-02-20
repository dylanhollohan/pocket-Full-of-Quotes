import Aurelius from '../../public/aurelius.png';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';

const Header: React.FC = (props) => {
  return (
    <div className="header">
      <img id="aurelius" src={Aurelius} alt='Aurelius Nav'/>
      <span id="title">Pocket Full of Quotes</span>
      <span id="quote-and-button">
        <div className="main-quote">
        "A classic book is a book that has never finished saying what it has to say"
        </div>
        <span className="main-quote-author">- Italo Calvino</span>
        <Tooltip 
          title="Log out"
          arrow
          placement="left"
          enterDelay={500}
          enterNextDelay={500}
        >
          <Button variant='text' color="info">
            <LogoutIcon htmlColor="#383939" fontSize="large"/>
          </Button>
        </Tooltip>
        
      </span>
    </div>
  )
}

export default Header;