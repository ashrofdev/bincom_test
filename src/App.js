import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      outcome: [ ]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/results').then(res=>{
      return res.json()
    
      
    }).then(data=>{
      const results = []
      console.log(data)
      data.forEach(e => {
        results.push(e)
      });
      this.setState({outcome: results})
    })
      console.log(this.state.outcome, typeof(this.state.outcome))
      
      // this.setState({outcome: results})
    
  }

  onSearch = (value) => {
    this.setState({search: value})

  }

  render(){
    const fileredSearch = this.state.outcome.filter(e=>{
      return e.party_abbreviation.includes(this.state.search.toUpperCase())
    })
    const result = fileredSearch.map(e=>{
        console.log(fileredSearch.length)
        return (
          <div className="result">
            <p className="party">{e.party_abbreviation}</p>
            <p>SCORE:  {e.party_score}</p>
            <p>DATE/TIME:  {e.date_entered}</p>
            <p>IP ADDRESS:  {e.user_ip_address}</p>
          </div>
        )
      
    })
    return (
      <div className="App">
        <div className="container">
          <Header onSearch={this.onSearch}/>
          <div className="results">
            {result}
          </div>
          <footer>
            &copy; By Ashraf. Powered by Bincon dev
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
