import { createContext } from "react"

const TableContext = createContext({})

export const TableProvider = ({ children }) => {
  
  const options = {
    licenseKey: "gpl-v3",
  }

  return (
    <TableContext.Provider
      value={{
        options,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export default TableContext