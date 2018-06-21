import { getIndie, getNetwork, getProduction  } from './apiCalls'

// test get indie api call
describe('apiCalls', () => {
  it('returns an object if status code is ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve({
            Getindie: [],
        })
      }),
    }))

    expect(getIndie()).resolves.toEqual({ Getindie: [] })
  })

  it('throws an error if status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }))

    expect(getIndie()).rejects.toEqual(Error('Network request failed'))
  })
})

// test get production api call

describe('apiCalls', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            Getproduction: [],
          })
        }),
      }))
  
      expect(getProduction()).resolves.toEqual({ Getproduction: [] })
    })
  
    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      }))
  
      expect(getProduction()).rejects.toEqual(Error('Network request failed'))
    })
  })

  // test get netwroks api call

  describe('apiCalls', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            Getnetworks: [],
          })
        }),
      }))
  
      expect(getNetwork()).resolves.toEqual({ Getnetworks: [] })
    })
  
    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      })) 
  
      expect(getNetwork()).rejects.toEqual(Error('Network request failed'))
    })
  })