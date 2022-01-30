import React from 'react';

export const GlobalContext = React.createContext();

// Provider
export const GlobalProvider = GlobalContext.Provider;

// Consumer
export const GlobalConsumer = GlobalContext.Consumer;