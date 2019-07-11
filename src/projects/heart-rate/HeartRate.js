import React from 'react'
import sampleData from './sample_data'
import schema from './schema'
// Import fusioncharts.js files from fusioncharts module
import FusionCharts from 'fusioncharts'
// Import the timeseries file from fusioncharts module
import TimeSeries from 'fusioncharts/fusioncharts.timeseries'
// Import ReactFusioncharts from react-fusioncharts module
import ReactFC from 'react-fusioncharts'
import { Container } from 'semantic-ui-react'
// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries)

class HeartRate extends React.Component {
  constructor (props) {
    super(props)

    const fusionTable = new FusionCharts.DataStore().createDataTable(
      sampleData,
      schema
    )
    this.state = {
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '90%',
        height: '500',
        dataSource: {
          caption: { text: 'Heart Rate vs Time - 22/02/19' },
          data: fusionTable
        }
      }
    }
  }

  render () {
    return (
      <Container>
        <ReactFC {...this.state.timeseriesDs} />
      </Container>
    )
  }
}
export default HeartRate
