import { DependencyList, useEffect, useState } from 'react'

export const useDebounce = (cb: () => void, delay = 500, dependencies: DependencyList = []) => {
  const [debounceValue, setDebounceValue] = useState(cb)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) {
      setReady(true)
      return
    }
    const handler = setTimeout(() => {
      setDebounceValue(cb)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...dependencies])

  return debounceValue
}
