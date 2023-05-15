import {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('Me redibuje D:')
  return (
    <small>{value}</small>
  )
})
