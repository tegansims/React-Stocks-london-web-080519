import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} addToPortfolio={this.props.addToPortfolio} />)
        }
      </div>
    );
  }

}

export default StockContainer;
