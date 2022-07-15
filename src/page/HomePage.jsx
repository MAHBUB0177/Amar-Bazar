import React from 'react'
import { TabTitle } from '../utils/FunctionTitle'
import { Banner } from './Banner'
import { Categoris } from './Categoris'
import { Opening } from './Opening'
import { Products } from './Products'
import { QuickSell } from './QuickSell'
import { Shop } from './Shop'
import Responsive from './Featered'
import { Slider } from './Slider'

export const HomePage = () => {
  TabTitle('Amar Bazar')
  return (
    <div className='' style={{}}>
          <Slider/>
          <Categoris/>
          <Shop/>
          <Products/>
          <QuickSell/>
          <Responsive/>
          
    </div>
  )
}
