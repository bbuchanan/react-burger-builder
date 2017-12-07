import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: 'Bill Buchanan',
        address: {
          street: '123 Main St',
          zipCode: '30144',
          country: 'USA'
        },
        email: 'nothanks@gmail.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
      })
  }

  render () {
    let form = (
    <form>
      <input className={classes.Input} type="text" name="name" placeholder="Your name" />
      <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
      <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
      <input className={classes.Input} type="text" name="postal" placeholder="Your Zip" />
      <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
    </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default  ContactData