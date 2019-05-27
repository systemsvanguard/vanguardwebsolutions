import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Contact Us</h1>
    <p>We would love to hear from you!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
