import React, {useState} from 'react'
import RecentPost from './RecentPost';
import RecentUser from './RecentUser';

const Recents = () => {
    const [activeTab, setActiveTab] = useState("recent-user");
  return (
    <div>

    <div style={{display: 'flex', paddingLeft: '2rem'}}>
        <h4 style={{ fontWeight: 700, fontSize: '15px', color: '#505050', cursor: 'pointer'}}  onClick={() => setActiveTab("recent-user")}>
            Recent Users
        </h4>
        <h4 style={{marginLeft: '1rem', fontWeight: 700, fontSize: '15px', color: '#505050', cursor: 'pointer'}} onClick={() => setActiveTab("recent-post")}>
            Recent Posts
        </h4>
        </div>
        <div>{activeTab === "recent-user" ? <RecentUser /> : <RecentPost /> }
    </div>
    </div>
  )
}

export default Recents