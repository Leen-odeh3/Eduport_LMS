import React from 'react'
import './View.css'
import AddTaskIcon from '@mui/icons-material/AddTask';
import TvIcon from "@mui/icons-material/Tv";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
const View = () => {
    const data = [
        {
          icon: <TvIcon style={{ fontSize: "50px", color: "#f7c32e" }} />,
          h5: "25 Total Courses",
          className: "A",
        },
        {
          icon: <AddTaskIcon style={{ fontSize: "50px", color: "#1d3b53" }} />,
          h5: "225 Complete lessons",
          className: "B",
        },
        {
          icon: <WorkspacePremiumIcon style={{ fontSize: "50px", color: "#6f42c1" }} />,
          h5: "8 Achieved Certificates",
          className: "C",
        }
      ];
    
  return (
    <div className='trr'>
       {data.map((e) => (
        <div className="allCard">
          <div className={e.className}>
            <div classNmae="icon">
              <div className="helo">{e.icon}</div>
            </div>
            <div className="bl">
              <div>{e.h5}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default View
