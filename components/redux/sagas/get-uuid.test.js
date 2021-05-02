import axios from 'axios'
import { getUuid } from './get-uuid'
import { runSaga } from 'redux-saga'

jest.mock('axios')

describe('testing get-uuid saga', () => {
  it('get uuids', async () => {
    axios.get.mockResolvedValue({
      data: {
        uuid: 'test'
      }
    })

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      getUuid
    )
    expect(axios.get.mock.calls[0][0]).toBe('https://httpbin.org/uuid')
    expect(dispatched[0].type).toBe('GET_UUID_SUCCESS')
    expect(dispatched[0].data).toBe('test')
  })
  it('fails getting uuids', async () => {
    axios.get = jest.fn(() => Promise.reject())

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      getUuid
    )
    expect(axios.get.mock.calls[0][0]).toBe('https://httpbin.org/uuid')
    expect(dispatched[0].type).toBe('GET_UUID_ERROR')
  })
})
