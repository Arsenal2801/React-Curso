import { types } from "../../../src/auth/types/types"

describe('Types testing', () => {
  test('should return the types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
})