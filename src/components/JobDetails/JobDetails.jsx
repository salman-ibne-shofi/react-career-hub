import { useLoaderData, useParams } from "react-router-dom";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

const JobDetails = () => {
	const jobs = useLoaderData();
	const { id } = useParams();
	const idInt = parseInt(id);
	const job = jobs.find((job) => job.id === idInt);
	const {
		job_description,
		job_responsibility,
		educational_requirements,
		experiences,
		contact_information,
		job_title,
		salary,
	} = job;

	return (
		<div>
			<div className="grid gap-4 md:grid-cols-4">
				<div className="border md:col-span-3 p-4">
					<h2 className="text-2xl font-bold">
						Job Details of: {job.job_title}
					</h2>
					<div className="text-xl">
						Job Description: {job_description}
					</div>
					<div className="text-xl mt-4">
						Job Responsibility: {job_responsibility}
					</div>
					<div className="text-xl mt-4">
						Educational Requirements: {educational_requirements}
					</div>
					<div className="text-xl mt-4">
						Experiences: {experiences}
					</div>
				</div>
				<div className="p-4 bg-blue-200 rounded-xl">
					<p className="font-bold">Job Details</p>
					<div className="border"></div>
					<div className="flex mt-4">
						<AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
						Salary : {salary}
					</div>
					<div className="flex mt-2">
						<IoCalendarOutline className="text-2xl mr-2"></IoCalendarOutline>
						Job Title : {job_title}
					</div>
					<p className="font-bold mt-4">Contact Information</p>
					<div className="border my-4"></div>
					<div className="flex">
						<CiPhone className="text-2xl mr-2"></CiPhone> Phone :
						{contact_information.phone}
					</div>
					<div className="flex mt-2">
						<CiMail className="text-2xl mr-2"></CiMail> Email :
						{contact_information.email}
					</div>
					<div className="flex mt-2">
						<MdLocationOn className="text-2xl mr-2"></MdLocationOn>
						Address : {contact_information.address}
					</div>
					<button className="btn bg-cyan-500 w-full text-white mt-4">
						Apply Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
