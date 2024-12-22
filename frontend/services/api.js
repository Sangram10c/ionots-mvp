import axios from "axios";

const API = axios.create({ baseURL: "mongodb://localhost:27017/" });

export const fetchProjects = () => API.get("/projects");
export const createProject = (project) => API.post("/projects", project);
