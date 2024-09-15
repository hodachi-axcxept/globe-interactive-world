import React from 'react'
import CountryMarker from './CountryMarker'
import { countries } from '../utils/countryData'

const CountryMarkers = () => {
  return (
    <>
      {countries.map((country, index) => (
        <CountryMarker key={index} {...country} />
      ))}
    </>
  )
}

export default CountryMarkers