import { useState, useEffect } from 'react';

import { projectsData } from "../data/projectsData"

export const useProjectData = projectId => {
  const [ projectData, setProjectData ] = useState(null);

  useEffect(() => {
    const projectInfo = projectsData.find(project => project.id == projectId)
    setProjectData(projectInfo)
  });

  return projectData;
}