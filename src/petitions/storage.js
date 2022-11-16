const storage = {
    get(key) {
      const value = localStorage.getItem(key) || sessionStorage.get(key)
      
      return JSON.parse(value);
    },
  
    set(key, value,remember=false) {
      remember ? localStorage.setItem(key, JSON.stringify(value)) : sessionStorage.setItem(key, JSON.stringify(value))
    },
  
    remove(key) {
      localStorage.removeItem(key);
    },
  
    clear() {
      localStorage.clear();
    },
  };
  
  export default storage;
  