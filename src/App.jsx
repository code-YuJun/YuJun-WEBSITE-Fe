import React,{memo} from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router'

import BlogHeader from "@/components/blog-header"
import BlogFooter from "@/components/blog-footer"

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>
        <BlogHeader />
      </div>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>
        <BlogFooter />
      </div>
    </div>
  )
})

export default App;
