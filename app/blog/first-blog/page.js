'use client'

import React from 'react'
import Content from './content.mdx'

//Overwrites mdx generated html components with styles defined in mdx-util
import {overrideComponents} from '../../../mdx-utils';

const FirstBlog = () => {
  return (
    <div className='py-10'>
      <Content components={overrideComponents} />
    </div>
  )
}


export default FirstBlog