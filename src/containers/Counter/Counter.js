import React from 'react'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import "./Counter.css"

import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="افزایش"
          clicked={() => this.props.myAct("INC")}
        />
        <CounterControl
          label="کاهش"
          clicked={() => this.props.myAct("DEC")}
        />
        <CounterControl
          label="افزودن ۲"
          clicked={() => this.props.myAct("ADD")}
        />
        <CounterControl
          label="کاهش ۲"
          clicked={() => this.props.myAct("SUB")}
        />
        <button className='show-btn' onClick={this.props.showList.bind(this)}>نمایش لیست</button>
        <ul>{this.props.list.map((item) => (
          <li key={Math.random}>{item}</li>
        ))}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return (
    {
      ctr: state.counter,
      list: state.List
    }
  )
}
const mapDispatchToProps = (dispatch) => {
  return (
    {
      myAct: (Type) => dispatch({ type: Type, value: 2 }),
      showList: () => dispatch({ type: "SHOW" })
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
