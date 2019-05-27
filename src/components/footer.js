import React from 'react'
import { Link } from 'gatsby'

const SiteFooter = () => (
  <div
    style={{
      background: 'ivory ', 
	  color: 'green',
      textDecoration: 'none',
	  padding: '0.5rem 0.5rem',
	  margin: '0 auto',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h6 style={{ margin: 0 }}>
        <a href="/"> {'Home'} </a> | 
		<a href="/page-2"> {'Page 2'} </a> | 
		
		<a href="/services"> {'Services'} </a> | 
		<a href="/portfolio"> {'Code'} </a> | 
		<a href="/services"> {'Services'} </a> | 
		<a href="/about"> {'About'} </a> | 		
		<a href="/contact"> {'Contact'} </a> | 
		
		<a href="/my-firstpost"> {'First'} </a> | 
		<a href="/second-post"> {'Second'} </a> 

      </h6>
	  <br />
    </div>
  </div>
)

export default SiteFooter

