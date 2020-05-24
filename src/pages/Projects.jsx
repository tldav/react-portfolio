import React from "react";
import yodascope from "../assets/yodascope.PNG";

const Projects = () => {
	return (
		<div>
			<h2 className="title">My Work</h2>
			<div className="stage">
				<div className="project-nav mb-5">
					<ul>
						<li>
							<a href="/">YodaScope</a>
						</li>
						<li>
							<a href="/projects">plumm.it</a>
						</li>
						<li>
							<a href="/contact">Fitness Tracker</a>
						</li>
					</ul>
				</div>
				<div className="row ">
					<div className="col-12">
						<div className="row mb-4">
							<div className="col-12 d-flex justify-content-center">
								<h2>YodaScope</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-12 d-flex justify-content-center mb-4">
								<h3 className="description">
									Check your Horoscope in Yoda Speech. Created
									using JavaScript, Tailwind CSS, third party
									APIs - Aztro and Yodish{" "}
								</h3>
							</div>
						</div>
						<div className="row mb-4 d-flex align-items-center">
							<div className="col-8 d-flex">
								<img
									src={yodascope}
									alt="sdf"
									style={{
										maxWidth: "90%",
										height: "auto",
										borderRadius: "20px"
									}}
								/>
							</div>
							<div className="row d-flex justify-content-end">
								<div className="col-4 ">
									<div className="row mb-5">
										<div className="col-12 d-flex">
											<a href="https://tldav.github.io/yoda-horoscope/">
												<h3>Application</h3>
											</a>
										</div>
									</div>
									<div className="row">
										<div className="col-12 d-flex">
											<a href="https://github.com/tldav/yoda-horoscope">
												<h3>Repository</h3>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
