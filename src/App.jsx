import { Fragment } from 'react'
import Handsontable from 'handsontable/base'
import { HotColumn, HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.min.css'
import './App.css'

registerAllModules();

function App() {

  return (
    <HotTable
      data={[]}
      allowEmpty={true}
      licenseKey="non-commercial-and-evaluation"
      startCols={1}
      startRows={18}
    >
      <HotColumn />
    </HotTable>

  )
}

export default App
