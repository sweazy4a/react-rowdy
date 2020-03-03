import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Shipping from './components/Shipping/Shipping';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import './App.css';

// Import redux provider
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';




class App extends Component {



toggleDiv = () => {
    const { show } = this.state;
    this.setState( { show : !show } )
}



  constructor(props) {
    super(props);
    this.state = { show : true };
    
    this.toggleDiv = this.toggleDiv.bind(this)
    
    this.state = {
      total: 12.99,
      taxes: 0,
      pickupSavings: -3.85,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }


  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };


  



  render() {
    return (

  
      
// First step 

      // Second step
      <div className="container">

 


          <Grid className="second-step purchase-card">
          <h1>Shopping cart</h1>
          <SubTotal price={this.state.total.toFixed(2)} />
          <Shipping/>
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCodeDiscount
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </Grid>

        <Grid className="purchase-card">
   
        <ProductInfo/>
          <button class="btn-purchase">Purchase {this.state.total.toFixed(2)}$</button>
         </Grid>
        </div>

           


    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});



export default connect(mapStateToProps, {
  handleChange
})(App);

