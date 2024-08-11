import './topbar.css'
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Social App</span>
      </div>
      <div className="topbarCentre">
        <div className="searchbar">
          <Search className='searchIcon' />
          <input placeholder='Search here' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">9</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="https://media.licdn.com/dms/image/D4D03AQFr-SE6F1qw5w/profile-displayphoto-shrink_800_800/0/1677914632897?e=2147483647&v=beta&t=fgC1GuAp9Pe4fPUd0Q9y0FoojdynmnBFgIMtE0mno9o" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
