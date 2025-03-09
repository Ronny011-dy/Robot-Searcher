import type { Robot } from '../App';

export const fetchRobotData = async (url: string): Promise<Robot[]> => {
  const response = await fetch(url);
  return await response.json();
};
