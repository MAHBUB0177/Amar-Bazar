import React from 'react'
import { Header } from '../components/Header'
import { Banner } from './Banner'
import { Categoris } from './Categoris'
import { DisProduct } from './DisProduct'
import { Opening } from './Opening'
import { Products } from './Products'
import { QuickSell } from './QuickSell'
import { Shop } from './Shop'
import { Slider } from './Slider'

export const HomePage = () => {
  return (
    <div className='' style={{marginLeft:'20px',marginRight:'20px'}}>
          <Slider/>
          <Categoris/>
          <Shop/>
          <Products/>
          <QuickSell/>
          <DisProduct/>
          <Opening/>
          
    </div>
  )
}
