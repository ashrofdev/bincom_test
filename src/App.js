import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      outcome: [],
      PDP: 0,
      DPP: 0,
      ACN: 0,
      PPA: 0,
      CDC: 0,
      JP: 0,
      ANPP: 0,
      LABOUR: 0,
      CPP: 0,
      clicked: false
    }
  }

  componentDidMount(){
    fetch('https://bincomapi.herokuapp.com/results').then(res=>{
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

 
  findResult = () => {
    this.setState({clicked: true})
    fetch('https://bincomapi.herokuapp.com/pdp').then(res=>{
        return res.json()
    
      
      }).then(data=>{
        console.log(data)
        // let sum = 0
        // data.forEach((e, i)=>{
        //   sum += e
        //   console.log(sum)
        // })

          let PDPsum = 0
          let ACN = 0
          let DPP = 0
          let PPA = 0
          let CDC = 0
          let JP = 0
          let ANPP = 0
          let LABOUR = 0
          let CPP = 0
        data.PDP.forEach(e=>{
          PDPsum += e
          this.setState({PDP: PDPsum})
          
        })
          
          
          
          
          
          
          
          
        console.log(this.state)

        data.ACN.forEach(e=>{
          ACN += e
          this.setState({ACN: ACN})
        })
        data.PDP.forEach(e=>{
          DPP += e
          this.setState({DPP: DPP})
        })
        data.PPA.forEach(e=>{
          PPA += e
          this.setState({PPA: PPA})          
        })
        data.CDC.forEach(e=>{
          CDC += e
          this.setState({CDC: CDC})          
        })
        data.JP.forEach(e=>{
          JP += e
          this.setState({JP: JP})          
        })
        data.ANPP.forEach(e=>{
          ANPP += e
          this.setState({ANPP: ANPP})          
        })
        data.LABOUR.forEach(e=>{
          LABOUR += e
          this.setState({LABOUR: LABOUR})         
        })
        data.CPP.forEach(e=>{
          CPP += e
          this.setState({CPP: CPP})        
        })

      })
  }

  render(){
   
    const result = this.state.outcome.map(e=>{
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
          <Header/>
          <div className="results">
            {result}
          </div>
          {
            this.state.clicked?
              <div className="unit_results">
              <p>PDP: {this.state.PDP}</p>
              <p>DPP: {this.state.DPP}</p>
              <p>ACN: {this.state.ACN}</p>
              <p>PPA: {this.state.PPA}</p>
              <p>CDC: {this.state.CDC}</p>
              <p>JP: {this.state.JP}</p>
              <p>ANPP: {this.state.ANPP}</p>
              <p>LABOUR: {this.state.LABOUR}</p>
              <p>CPP: {this.state.CPP}</p>
            </div>:null
          }
          <button onClick={this.findResult}>SHOW RESULT FOR ALL PULLING UNITS</button>
          <footer>
            &copy; By Ashraf. Powered by Bincon dev
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
