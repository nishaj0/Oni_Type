function useLocalStorage() {
   const getLocalStorage = (key: string) => {
      try {
         const value = localStorage.getItem(key);
         return value ? JSON.parse(value) : null;
      } catch (error) {
         console.error('something went wrong', error);
      }
   };

   const setLocalStorage = (key: string, value: string) => {
      try {
         localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
         console.error('something went wrong', error);
      }
   };
   return { getLocalStorage, setLocalStorage };
}

export default useLocalStorage;
