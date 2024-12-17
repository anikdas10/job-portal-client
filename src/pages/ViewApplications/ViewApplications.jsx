import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e,id) =>{
        console.log(e.target.value,id);
        const data= {
            status : e.target.value
        }
        fetch(
          `http://localhost:5000/applications/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
    }
    return (
      <div>
        <h2>Applications for this job:{applications.length}</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Update Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {applications.map((app, index) => (
                  <tr key={app._id}>
                    <th>{index + 1}</th>
                    <td>{app.job_id}</td>
                    <td>Quality Control Specialist</td>
                    <td>
                      <select
                      onChange={(e)=>handleStatusUpdate(e,app._id)}
                        defaultValue={app.status || "Change Status"}
                        className="select select-bordered select-xs w-full max-w-xs"
                      >
                        <option disabled selected>
                          Change Status
                        </option>
                        <option>Under review</option>
                        <option>Set InterView</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default ViewApplications;