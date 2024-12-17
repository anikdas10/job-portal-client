import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";


const MyPostedJob = () => {

    const [jobs,setJobs] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))

    },[user.email])
    return (
      <div>
        <h2>Posted Jobs:{jobs.length}</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Job title</th>
                  <th>DeadLine</th>
                  <th>View Applications</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {jobs.map((job,index) => (
                  <tr key={index}>
                    <th>{index+1}</th>
                    <td>{job.title}</td>
                    <td>{job.deadline}</td>
                    <td><Link to={`/view/${job._id}`} className="btn">View</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyPostedJob;