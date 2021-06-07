import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import { addTOApplyList, removeToFavoriteList } from '../../Redux/Slices/jobSlice';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ApplyJobForm = ({ modalIsOpen, closeModal, job }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const { pathname } = useLocation();
    const mainPath = pathname.split('/')[1];

    const onSubmit = data => {
        if (data) {
            if (mainPath === 'jobs') {
                dispatch(addTOApplyList(job));
            }
            if (mainPath === 'favorite-jobs') {
                dispatch(addTOApplyList(job));
                dispatch(removeToFavoriteList(job.id))
            }
            swal("Apply Successful", {
                icon: "success",
            });
            closeModal()
        } else {
            swal("Error", "Something is wrong", 'error');
        }
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group row">
                        <div className="form-group col-6">
                            <h5>Your Name</h5>
                            <input className="form-control" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                            {errors.name && <p>jobTitle is required.</p>}
                        </div>
                        <div className="form-group col-6">
                            <h5>Your Email</h5>
                            <input className="form-control" type="email" placeholder="Your email" {...register("email", { required: true })} />
                            {errors.email && <p>jobTitle is required.</p>}
                        </div>
                    </div>

                    <div className="form-group my-4">
                        <h5>Cover Letter (optional)</h5>
                        <textarea className="form-control" type="text" rows="5" placeholder="Wright a cover letter" {...register("cover-letter")} ></textarea>
                    </div>

                    <div className="form-group mb-4">
                        <h5>upload resume Link Here</h5>
                        <input className="form-control" type="text" rows="5" placeholder="Enter Your Resume Link" {...register("resume", { required: true })} />
                        {errors.resume && <p>jobTitle is required.</p>}
                    </div>

                    <div className="form-group d-flex justify-content-between">
                        <button onClick={() => closeModal()} type="reset" className="btn btn-danger">Cancel</button>
                        <input className="btn btn-success" type="submit" value="Apply" />
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default ApplyJobForm;