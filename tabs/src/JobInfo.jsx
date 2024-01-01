import Duties from "./Duties";

const JobInfo = ({ company, dates, title, duties }) => {
    return (
        <article>
            <h5 className="title">{title}</h5>
            <span className="job-company">{company}</span>
            <br />
            <span className="job-date">{dates}</span>
            <Duties duties={duties} />
        </article>
    );
}
export default JobInfo