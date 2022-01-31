import { projectsData } from "../data/projectsData"

export const useProjectData = projectId => {
  const projectInfo = projectsData.find(project => project.id == projectId)

  return projectInfo;
}