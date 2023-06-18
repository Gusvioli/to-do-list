import { useContext } from 'react'
import Context from '../../context/Context'

function ListSearch() {
  const { search } = useContext(Context)
  return (
    <>
      <div>ListSearch: {search}</div>
    </>
  )
}

export default ListSearch
