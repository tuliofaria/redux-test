import reducer from './index'

describe('testing reducers', () => {
  it('increments', () => {
    const currentState = {
      value: 0
    }
    const action = {
      type: 'increment'
    }
    const resultState = reducer(currentState, action)
    expect(resultState.value).toBe(1)
  })
  it('get uuid', () => {
    const currentState = {
      value: 1,
      uuid: {
        loading: false,
        data: {}
      }
    }
    const action = {
      type: 'GET_UUID'
    }
    const resultState = reducer(currentState, action)

    expect(resultState.value).toBe(1)
    expect(resultState.uuid.loading)
    expect(resultState.uuid.data).toEqual({})
  })
  it('get uuid success', () => {
    const currentState = {
      value: 1,
      uuid: {
        loading: true,
        data: {}
      }
    }
    const action = {
      type: 'GET_UUID_SUCCESS',
      data: 'test'
    }
    const resultState = reducer(currentState, action)

    expect(resultState.value).toBe(1)
    expect(!resultState.uuid.loading)
    expect(resultState.uuid.data).toBe('test')
  })
})
