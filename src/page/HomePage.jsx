import React from 'react'
import { TabTitle } from '../utils/FunctionTitle'
import { Banner } from './Banner'
import { Categoris } from './Categoris'
import { DisProduct } from './DisProduct'
import { Opening } from './Opening'
import { Products } from './Products'
import { QuickSell } from './QuickSell'
import { Shop } from './Shop'
import { Slider } from './Slider'

export const HomePage = () => {
  TabTitle('Amar Bazar')
  return (
    <div className='' style={{marginLeft:'20px',marginRight:'20px'}}>
          <Slider/>
          <Categoris/>
          <Shop/>
          <Products/>
          <QuickSell/>
          {/* <DisProduct/> */}
          <Opening/>
          
    </div>
  )
}
