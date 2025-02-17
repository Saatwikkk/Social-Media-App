import './sidebar.css'
import { RssFeed, WorkOutline } from "@mui/icons-material"
import { Chat } from "@mui/icons-material"
import { VideoCall } from "@mui/icons-material"
import { Bookmark } from "@mui/icons-material"
import { QuestionAnswer } from "@mui/icons-material"
import { CalendarMonth } from "@mui/icons-material"
import { Group } from "@mui/icons-material"
import { School } from "@mui/icons-material"
import { WorkOutlineOutlined } from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriends from '../closeFriends/CloseFriends'



export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeed className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <Chat className='sidebarIcon'/>
                <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
                <VideoCall className='sidebarIcon'/>
                <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
                <Bookmark className='sidebarIcon'/>
                <span className="sidebarListItemText">Bookmark</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutlineOutlined className='sidebarIcon'/>
                <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
                <QuestionAnswer className='sidebarIcon'/>
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                <CalendarMonth className='sidebarIcon'/>
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                <Group className='sidebarIcon'/>
                <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
                <School className='sidebarIcon'/>
                <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
            {Users.map(u=>(
                <CloseFriends key={u.id} user={u} />
            ))}
        </ul>
      </div>
    </div>
  )
}
