import React,  {useState} from 'react'
import RecentPost from './RecentPost'

const RecentUser = () => {
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
        {/* <div>{activeTab === "recent-user" ? <RecentUser /> : <RecentPost /> }
    </div> */}
        <div style={{display: 'flex'}}>
        <div>

        </div>
        <div style={{ background: "#FFFFFF", boxShadow: "0px 0px 7px 3px rgba(40, 40, 40, 0.03)", borderRadius: "4px"}}>

        </div>
    </div>
    
    </div>
  )
}

export default RecentUser