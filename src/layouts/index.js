import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import '../../semantic/dist/semantic.min.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Finbot. A tax calculator for humans."
      meta={[
        { name: 'description', content: 'An income tax calculator for people who hate calculators.' },
        { name: 'keywords', content: 'Tax, income, calculator, fin, bot' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
