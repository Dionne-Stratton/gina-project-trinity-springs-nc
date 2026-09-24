import { createContext, useContext } from 'react'

export const PathContext = createContext(null)

export function usePath() {
  const context = useContext(PathContext)
  if (!context) {
    throw new Error('usePath must be used within PathProvider')
  }
  return context
}
