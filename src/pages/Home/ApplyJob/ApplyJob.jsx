import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ApplyJob = () => {
    const {id} = useParams();
    // console.log(id);
  const handleApply = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);
    formData.job_id = id;
    // console.log(formData);
    // console.log(formData);
    fetch("http://localhost:5000/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "centre",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
            with: "20rem",
          });
        }
      });
  };
  return (
    <div>
      <h2>Hii</h2>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleApply}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="text"
              placeholder="LinkedIn URL"
              name="LinkedIn"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              type="text"
              placeholder="Github URL"
              name="Github"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="text"
              placeholder="Resume URL"
              name="Resume"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
