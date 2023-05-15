
import { authReducer } from '../../../src/auth'
import { types } from '../../../src/auth/types/types'

describe('authReducer testing', () => {
  test('should return the initial state ', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('should return the login state ', () => {
    const state = authReducer({ logged: false }, {
      type: types.login,
      payload: { 
        name: 'test',
        id: 123
       }
    })
    expect(state).toEqual({ logged: true, user: { name: 'test', id: 123 } })
  })

  test('should return the logout state ', () => {
    const state = authReducer({ logged: true }, {
      type: types.logout
    })
    expect(state).toEqual({ logged: false })
  })
})