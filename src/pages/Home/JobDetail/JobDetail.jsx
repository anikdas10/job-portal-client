import { Link, useLoaderData } from "react-router-dom";


const JobDetail = () => {
    const job = useLoaderData();
    console.log(job);
    return (
      <div>
        <h2>hello</h2>
        <Link to={`/apply/${job._id}`}>
          <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-200">
            Apply Now
          </button>
        </Link>
      </div>
    );
};

export default JobDetail;