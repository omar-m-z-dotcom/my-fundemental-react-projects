const BtnContainer = ({ jobs, currentJob, setCurrentJob }) => {
    return (
        <div className='btn-container'>
            {jobs.map((job) => {
                return (
                    <button
                        key={job.id}
                        className={`job-btn ${job.id === currentJob.id ? 'active-btn' : ''}`}
                        onClick={() => setCurrentJob(job)}
                    >
                        {job.company}
                    </button>
                );
            })}
        </div>
    );
}
export default BtnContainer