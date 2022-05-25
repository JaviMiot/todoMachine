export const config = () => {
  return {
    localStorageVersion: process.env.LOCAL_STORAGE_VERSION || 'todoData',
  };
};
