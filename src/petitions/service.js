import client,{
    removeAuthorizationHeader,
    setAuthorizationHeader,
} from "../API/client.js"
import storage from "./storage.js"  


export const login = credentials => {
    return client.post('/api/auth​/login', credentials).then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);
      storage.set('auth', accessToken);
    });
  };
  
  export const logout = () => {
    return Promise.resolve().then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
    });
  };