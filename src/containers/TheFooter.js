import React from 'react'
import {CFooter} from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <span className="mr-1">Created by</span>
        <a href="https://stephan-botes.github.io/developer-profile/"
          target="_blank"
          rel="noopener noreferrer">
          Stephan Botes
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
