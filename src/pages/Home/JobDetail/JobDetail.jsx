import { useLoaderData } from "react-router-dom";


const JobDetail = () => {
    const job = useLoaderData();
    console.log(job);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default JobDetail;