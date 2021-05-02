import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.value)
  const uuid = useSelector((state) => state.uuid)
  return (
    <>
      <h1>Home {value}</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'increment'
          })
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'GET_UUID'
          })
        }}
      >
        Load UUID
      </button>
      <pre>{JSON.stringify(uuid, null, 2)}</pre>
    </>
  )
}
export default Home
