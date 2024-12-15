import { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext";

const AddJob = () => {

  const {user} = useContext(AuthContext);
  const handleAddJob = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    // console.log(form.entries());
    const initialData = Object.fromEntries(form);
    console.log(initialData);

    const { max, min, currency, requirements, responsibilities, ...newJob } =
      initialData;
    // console.log(newJob);
    newJob.salaryRange = {min,max,currency};
    newJob.requirements = requirements.split("\n");
    newJob.responsibilities = responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId)
        {
         Swal.fire({
           position: "centre",
           icon: "success",
           title: "Your work has been saved",
           showConfirmButton: false,
           timer: 1500,
           with:'20rem'
         }); 

        }
      });


  };


  return (
    <div className="container mt-16 md:mt-20 lg:mt-32 mb-16">
      <h2 className="text-center font-bold text-3xl">Add Job</h2>
      {/* form */}
      <div className="md:max-w-3xl mx-auto border p-4 rounded-lg mt-8 shadow-slate-300 shadow-md">
        <form onSubmit={handleAddJob}>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full  mx-auto">
              <div className="label">
                <span className="label-text">Job Title</span>
              </div>
              <input
                type="text"
                placeholder="Enter image URL"
                name="title"
                className="input input-bordered w-full "
                required
              />
            </label>
            {/* job location */}
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text">Job Location</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Enter Item Name"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full max-w-lg mx-auto">
              <div className="label">
                <span className="label-text">Job Type</span>
              </div>
              <select
                name="jobType"
                className="select select-ghost w-full max-w-xs input-bordered"
              >
                <option disabled selected>
                  Select The Job Type
                </option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Hybrid</option>
                <option>Remote</option>
                <option>Intern</option>
              </select>
            </label>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full max-w-lg mx-auto">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Enter Category"
                name="category"
                className="input input-bordered w-full "
                required
              />
            </label>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text">Application Deadline</span>
              </div>
              <input
                type="date"
                placeholder="Application Deadline"
                name="applicationDeadline"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full max-w-lg mx-auto">
              <div className="label">
                <span className="label-text"> Status</span>
              </div>
              <input
                type="text"
                placeholder="Status"
                name="status"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <label className="form-control mx-auto">
              <div className="label">
                <span className="label-text">Currency</span>
              </div>
              <input
                type="text"
                placeholder="Max"
                name="max"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control mx-auto">
              <div className="label">
                <span className="label-text"></span>
              </div>
              <input
                type="text"
                placeholder="Min"
                name="min"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control mx-auto">
              <select
                name="currency"
                defaultValue="Currency"
                className="select select-ghost w-full max-w-xs input-bordered"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </label>
          </div>
          {/* company requirements */}
          <div>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text">Job Responsibilities</span>
              </div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write each responsibility in new line"
                name="responsibilities"
              ></textarea>
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text">Job Requirements</span>
              </div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write each responsibility in new line"
                name="requirements"
              ></textarea>
            </label>
          </div>
          {/* hr */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">HR Name</span>
            </div>
            <input
              type="text"
              placeholder="HR name"
              name="hr_name"
              className="input input-bordered w-full "
              required
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">HR Email</span>
            </div>
            <input
              type="text"
              defaultValue={user?.email}
              placeholder="HR Email"
              name="hr_email"
              className="input input-bordered w-full "
              required
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Company Logo URL</span>
            </div>
            <input
              type="text"
              placeholder="Company Logo"
              name="logo"
              className="input input-bordered w-full "
              required
            />
          </label>
          <div className="   mt-4">
            <button className="bg-[#178582] text-white py-2 w-full rounded-md">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
