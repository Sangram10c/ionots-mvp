import React, { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then((res) => setProjects(res.data));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        {project.title}: {project.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
