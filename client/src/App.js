import React from 'react'
import Axios from 'axios'
import ImageForm from './component/ImageForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ImageDisplay from './component/ImageDisplay'


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       imgaeData:[]
    }
  }
  

  create = (sakthi) => {
    Axios.post('http://localhost:5000', sakthi)
      .then(res => {
        console.log(res)
      })
  }

  componentDidMount(){
    this.getall();
  }


  getall(){
    Axios.get('http://localhost:5000/alldata')
      .then(res => {
        this.setState({imgaeData:res.data})
      })
  }



  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" >
              <ImageDisplay getdata={this.state.imgaeData}/>
            </Route>
            <Route path="/imageForm" >
              <ImageForm bData={this.create} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App