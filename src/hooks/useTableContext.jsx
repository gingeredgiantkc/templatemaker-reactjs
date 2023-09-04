import { useContext } from "react"
import TableContext from "../contexts/tableContext"

const useTableContext = () => useContext(TableContext)
export default useTableContext