import { useEffect, useRef } from 'react';
import type { Robot } from '../App';
import { fetchRobotData } from '../api/robots';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const useGetRobotUsers = () => {
  const robotsRef = useRef<Robot[]>([]);

  useEffect(() => {
    const getRobotUsers = async () => {
      try {
        robotsRef.current = await fetchRobotData(URL);
      } catch (error) {
        console.error('Error fetching robots:', error);
      }
    };

    getRobotUsers();
  }, []);

  return { robots: robotsRef.current };
};
