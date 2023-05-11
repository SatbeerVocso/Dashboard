import React from 'react'

function AllFieldType() {
  return (
    <div className='bg-primary text-white' style={{padding:'5px', borderRadius:'8px', cursor:'pointer'}}>
      <div>
        <i className='ti-text'></i>
        <span>Text</span>
      </div>
      <div>
        <i className='ti-money'></i>
        <span>Currency</span>
      </div>
      <div>
        <i className='ti-file'>
          <span>File</span>
        </i>
      </div>
    </div>
  )
}

export default AllFieldType
