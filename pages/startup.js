import React, { Component } from 'react'
import PDFViewer from '../components/Util/PDFViewer'

class Startup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PDFViewer filepath='/static/startup.pdf'/>
    )
  }
}

export default Startup
