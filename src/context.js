import { createContext } from 'react';

//export const userContext = createContext({ userId: null, setUserId: () => { } });
export const userContext = createContext({});
export const userInfoContext = createContext({});
export const oauthContext = createContext({});
export const loggedInContext = createContext({ loggedIn: false });

//export const pageContext = createContext({ currentPage: 'null' });