import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://qi.com.vn" target="_blank" rel="noopener noreferrer">
          Qi Technologies
        </a>
        <span className="ms-1">&copy; 2023 </span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
