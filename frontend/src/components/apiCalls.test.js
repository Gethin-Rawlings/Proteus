import { getOrganisations, userSearch, programmeSearch, updateUsers, login  } from './apiCalls'

// test get indie api call
describe('apiCalls', () => {
  it('returns an object if status code is ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve({
          getOrganisations: [],
        })
      }),
    }))

    expect(getOrganisations()).resolves.toEqual({ getOrganisations: [] })
  })

  it('throws an error if status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }))

    expect(getOrganisations()).rejects.toEqual(Error('Network request failed'))
  })
})
  describe('apiCalls', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            userSearch: [],
          })
        }),
      }))
  
      expect(userSearch()).resolves.toEqual({ userSearch: [] })
    })
  
    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      })) 
  
      expect(userSearch()).rejects.toEqual(Error('Network request failed'))
    })
  })
  describe('apiCalls', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            programmeSearch: [],
          })
        }),
      }))
  
      expect(programmeSearch()).resolves.toEqual({ programmeSearch: [] })
    })
  
    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      })) 
  
      expect(programmeSearch()).rejects.toEqual(Error('Network request failed'))
    })
  })
  describe('apiCalls', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            updateUsers: [],
          })
        }),
      }))
  
      expect(updateUsers()).resolves.toEqual({ updateUsers: [] })
    })
  
    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      })) 
  
      expect(updateUsers()).rejects.toEqual(Error('Network request failed'))
    })
  })
  describe('apiCalls', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            login: [],
          })
        }),
      }))
  
      expect(login()).resolves.toEqual({ login: [] })
    })
  
    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      })) 
  
      expect(login()).rejects.toEqual(Error('Network request failed'))
    })
  })