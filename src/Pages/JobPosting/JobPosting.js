import React from "react";
import { useForm } from "react-hook-form";
import "./JobPosting.css";

const JobPosting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section id="about" className="about section">
      <div className="my-container">
        <div className="form-section ">
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-area">
                <label>Job title *</label> <br />
                <input {...register("jobTitle", { required: true })} />
                {errors.jobTitle && <p>jobTitle is required.</p>}
              </div>
              <div className="input-area">
                <label>Company *</label> <br />
                <input {...register("company", { required: true })} />
                {errors.company && <p>company name is required.</p>}
              </div>

              <div className="input-area">
                <label>Description</label>
                <br />
                <textarea
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && <p>description is required</p>}
              </div>
              <div className="input-area">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...register("type", { required: true })}
                >
                  <option selected>Select Job type</option>
                  <option value="part time">part time</option>
                  <option value="full time">full time</option>
                  <option value="internship">internship</option>
                </select>
                <br />
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPosting;
