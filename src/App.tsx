import React from 'react';
import './App.css';

type Props = {}

type State = {
  hour: string;
  min: string;
  sec: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const d:Date = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const time = this.adjDigit(hour, min, sec);
    
    this.state = {
      hour: time[0],
      min: time[1],
      sec: time[2]
    }
  }

  setHour = ():void => {
    const d:Date = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const time = this.adjDigit(hour, min, sec);

    this.setState({
      hour: time[0],
      min: time[1],
      sec: time[2]
    })
  }

  adjDigit = (hour:number, min:number, sec:number):string[] => {
    const time = [hour, min, sec];
    const adjtime = time.map((val) => {
      if(String(val).length < 2) {
        return '0' + String(val);
      }
      return String(val);
    });
    return adjtime;
  }

  componentDidMount() {
    setInterval(this.setHour, 1000);
  }

  render() {
    return(
      <div>{this.state.hour}:{this.state.min}:{this.state.sec}</div>
    )
  }

}

export default App;
