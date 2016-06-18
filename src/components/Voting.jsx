import React from 'react';

const style = {
  color: ''
}
export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function () {
    return (
      <div className="voting">
      {
        this.getPair().map(entry =>
          <button style={style}>
          <h1>{entry}</h1>
          </button>
        )
      }
      </div>
    );
  }

});
