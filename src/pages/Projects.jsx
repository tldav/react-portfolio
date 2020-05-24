import React, { useState } from "react";
import yodascope from "../assets/yodascope.PNG";
import projectInfo from "../project-info.json";

const Projects = () => {
	return (
		<div>
			<h2 className="title">My Work</h2>
			<div className="stage">
				<div className="project-nav mb-4">
					<ul>
						<li>
							<button>YodaScope</button>
						</li>
						<li>
							<button>plumm.it</button>
						</li>
						<li>
							<button>Fitness Tracker</button>
						</li>
					</ul>
				</div>
				<div className="row ">
					<div className="col-12">
						<div className="row mb-4 project-name">
							<div className="col-12 d-flex justify-content-center">
								<h1>{projectInfo[0].name}</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-12 d-flex justify-content-center mb-4">
								<h3 className="description">
									{projectInfo[0].description}
								</h3>
							</div>
						</div>
						<div className="row mb-4 d-flex align-items-center">
							<div className="col-8 d-flex">
								<img
									src={projectInfo[0].image}
									alt={projectInfo[0].name}
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
