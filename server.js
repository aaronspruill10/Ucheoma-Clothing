if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const stripe = require('stripe')('sk_test_51GzB5KCxnDLbnJ4akaFzJezJXzGkEQLywLr4VQ8FeghJnq6un5rpRtrGRwfIrDYYegigVdaB3pDVZFeUpHtRNJRp00KkR0ijJj');

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'T-shirt',
      },
      unit_amount: 490,
    },
    quantity: 1,
    {
    price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 490,
      },
      quantity: 1,
    }
  }],

  mode: 'payment',
  success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
  cancel_url: 'https://example.com/cancel',
});



const express = require('express')
const app = express()
const fs = require('fs')


const express = require('express');
const app = express();

app.get('/id', async (req, res) => {
  const session = // ... Fetch or create the Checkout Session
  res.json({session_id: session.id});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});



app.listen(3000)
