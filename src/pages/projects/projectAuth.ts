const STORAGE_KEY = 'projectsUnlocked';

export const isProjectsUnlocked = (): boolean =>
  sessionStorage.getItem(STORAGE_KEY) === 'true';

export const unlockProjects = (): void => {
  sessionStorage.setItem(STORAGE_KEY, 'true');
};
