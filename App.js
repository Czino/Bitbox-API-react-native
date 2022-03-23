import React from 'react'
import { useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useEffect } from 'react'
import { BitBox02API, getDevicePath } from 'bitbox02-api'
const App = () => {
  const [bitBoxLoaded, setBitBoxLoaded] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    (async () => {
      try {
        const devicePath = await getDevicePath()
        const BitBox02 = new BitBox02API(devicePath)
        setBitBoxLoaded(true)
      } catch (e) {
        console.error(e)
        setError(e.message)
      }
    })()
  }, [])

  return <SafeAreaView style={{padding: 16}}>
      <Text>Hello Bitbox!</Text>
      {bitBoxLoaded
        ? <Text>Bitbox API has been initialised</Text>
        : <Text>Initializing Bitbox API...</Text>
      }
      {error
        ? <Text style={{color: 'red', marginTop: 16}}>{error}</Text>
        : null
      }
    </SafeAreaView>
}

export default App
