import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const HotJobCard = ({job}) => {
    const {company_logo,title,location,jobType,description,company,requirements,salaryRange,_id} = job;
    console.log(job);
    return (
         <div className="bg-white rounded-lg shadow-lg p-6 text-gray-700">
        
        <div className="flex items-center mb-2">
            <img src={company_logo} alt="Company Logo" className="w-12 h-12 rounded-lg"/>
            <h3 className="ml-3 text-lg font-bold">{company}</h3>
        </div>
        <div className="text-sm text-gray-500 mb-4">
            <span className="flex items-center"><CiLocationOn /> {location}</span>
        </div>

        
        <div className="font-semibold text-lg mb-2">
            {title}
        </div>
        <div className="text-sm text-gray-400 flex space-x-4 mb-4">
            <span>&#128337; {jobType}</span>
            <span>&#128337; 5 minutes ago</span>
        </div>

        
        <p className="text-gray-600 text-sm mb-4">
           {description}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-4">
           {
            requirements.map((requirement,index)=> <button key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs hover:text-blue-500">{requirement}</button>)
           }
        </div>

        
        <div className="flex justify-between items-center">
            <span className="text-indigo-600 font-bold text-sm lg:text-lg">${salaryRange.max}-${salaryRange.min}</span>
            <Link to={`/jobs/${_id}`}>
            <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-200">
                Apply Now
            </button>
            </Link>
        </div>
    </div>
    );
};

export default HotJobCard;