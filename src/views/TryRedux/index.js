import React from 'react';
import { connect } from 'react-redux'

import style from 'src/views/TryRedux/index.scss'

@connect((state) => ({ countNum: state.get('count').get('value') }))
class Counter extends React.Component {
  render() {
    const { countNum, dispatch } = this.props;
    return (
      <section className={style.container}>
        <h1 className={style.value}>{countNum}</h1>
        <button className={style.btn} onClick={() => dispatch({ type: 'COUNT/INCREMENT', payload: '+1' })}>+</button>
        <button className={style.btn} onClick={() => dispatch({ type: 'COUNT/DECREMENT', payload: '-1' })}>-</button>
        <button className={style.btn} onClick={() => dispatch({ type: 'COUNT/INCREMENT_IF_ODD', payload: '奇数+1' })}>add if odd</button>
        <button className={style.btn} onClick={() => dispatch({ type: 'COUNT/INCREMENT_ASYNC', payload: '=1s' })}>add async</button>
      </section>
    )
  }
}

export default Counter
