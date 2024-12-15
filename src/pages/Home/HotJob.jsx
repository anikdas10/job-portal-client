import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJob = () => {
     const [jobs,setJobs] = useState([]);

     useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>{
           setJobs(data); 
        })
     },[])

    return (
        <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    jobs.map(job=><HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJob;