import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
	const [jobs, setJobs] = useState([]);
	// this is no the best way to load show all data
	const [dataLength, setDatalength] = useState(4);

	useEffect(() => {
		fetch("/jobs.json")
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => setJobs(data));
	}, []);

	try {
		console.log(jobs);
	} catch (e) {
		console.error(e);
	}

	return (
		<div>
			<div className="text-center">
				<div className="text-5xl">Featured Jobs: {jobs.length}</div>
				<p>
					Explore thousands of job opportunities with all the
					information you need. Its your future
				</p>
			</div>
			<div className="grid grid-cols-2 gap-6">
				{jobs.slice(0, dataLength).map((job) => (
					<Job key={job.id} job={job}></Job>
				))}
			</div>
			<div className={dataLength === jobs.length && "hidden"}>
				<button
					onClick={() => setDatalength(jobs.length)}
					className="btn btn-primary"
				>
					Show All Jobs
				</button>
			</div>
		</div>
	);
};

export default FeaturedJobs;
