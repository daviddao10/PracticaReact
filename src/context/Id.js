import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthContextConsumer = AuthContext.Consumer;


AuthContext.displayName = 'Id';

