import reducer from 'reducers'
import { RECEIVE_DELETE_SUCCESS } from 'actions'

describe('reducers/jobs', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {})

    expect(state.jobs).toEqual({
      items: {},
      currentPage: null,
      recentlyCreated: null,
      count: 0,
    })
  })

  it('UPSERT_JOBS upserts items along with the current page & count from meta', () => {
    const action = {
      type: 'UPSERT_JOBS',
      data: {
        specs: {
          a: { id: 'a' },
          b: { id: 'b' },
        },
        meta: {
          currentPageJobs: {
            data: [{ id: 'b' }, { id: 'a' }],
            meta: {
              count: 10,
            },
          },
        },
      },
    }
    const state = reducer(undefined, action)

    expect(state.jobs.items).toEqual({
      a: { id: 'a' },
      b: { id: 'b' },
    })
    expect(state.jobs.count).toEqual(10)
    expect(state.jobs.currentPage).toEqual(['b', 'a'])
  })

  it('UPSERT_RECENTLY_CREATED_JOBS upserts items along with the current page & count from meta', () => {
    const action = {
      type: 'UPSERT_RECENTLY_CREATED_JOBS',
      data: {
        specs: {
          c: { id: 'c' },
          d: { id: 'd' },
        },
        meta: {
          recentlyCreatedJobs: {
            data: [{ id: 'd' }, { id: 'c' }],
          },
        },
      },
    }
    const state = reducer(undefined, action)

    expect(state.jobs.items).toEqual({
      c: { id: 'c' },
      d: { id: 'd' },
    })
    expect(state.jobs.recentlyCreated).toEqual(['d', 'c'])
  })

  it('UPSERT_JOB upserts items', () => {
    const action = {
      type: 'UPSERT_JOB',
      data: {
        specs: {
          a: { id: 'a' },
        },
      },
    }
    const state = reducer(undefined, action)

    expect(state.jobs.items).toEqual({ a: { id: 'a' } })
  })

  it('RECEIVE_DELETE_SUCCESS deletes items', () => {
    const upsertAction = {
      type: 'UPSERT_JOB',
      data: { specs: { b: { id: 'b' } } },
    }
    const preDeleteState = reducer(undefined, upsertAction)
    expect(preDeleteState.jobs.items).toEqual({ b: { id: 'b' } })
    const deleteAction = {
      type: RECEIVE_DELETE_SUCCESS,
      id: 'b',
    }
    const postDeleteState = reducer(preDeleteState, deleteAction)
    expect(postDeleteState.jobs.items).toEqual({})
  })
})
