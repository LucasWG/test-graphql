import React, { createContext, useContext } from 'react'

type KeepContextData = {}

const KeepContext = createContext<KeepContextData>({} as KeepContextData)

export const KeepContextProvider: React.FC = ({ children }) => {
	//

	return <KeepContext.Provider value={{}}>{children}</KeepContext.Provider>
}

export const useKeep = () => useContext(KeepContext)
