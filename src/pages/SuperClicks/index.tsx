import { useCallback, useEffect, useRef, useState } from "react"
import { Global } from "./styles"

function useInterval(callback: () => void, delay: number, stop: boolean) {
  const savedCallback = useRef<any>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      if (stop) clearInterval(id)
      return () => clearInterval(id)
    }
  }, [delay, stop])
}

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const TheClicks = ({ clicks, delay, stop }: any) => {
  useInterval(
    () => {
      clicks()
    },
    delay,
    stop
  )

  return null
}

export const SuperClicks = () => {
  const [delay, setDelay] = useState(1000)
  const [count, setCount] = useState(0)
  const [stop, setStop] = useState(false)
  const [cantidad, setCantidad] = useState(5)

  const divRef1 = useRef<HTMLDivElement>(null)
  const divRef2 = useRef<HTMLDivElement>(null)
  const divRef3 = useRef<HTMLDivElement>(null)
  const divRef4 = useRef<HTMLDivElement>(null)
  const divRef5 = useRef<HTMLDivElement>(null)

  const clicks = () => {
    if (divRef1) divRef1.current?.click()
    if (divRef2) divRef2.current?.click()
    if (divRef3) divRef3.current?.click()
    if (divRef4) divRef4.current?.click()
    if (divRef5) divRef5.current?.click()
  }

  const showConsole = (text: string) => {
    console.log(
      `%c  ${text} `,
      `color:#a5cdff; font:700 12px "Herculanum" ,san-serif;`
    )
  }

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1)
    },
    delay,
    stop
  )

  function handleDelayChange(e: any) {
    setDelay(e.target.value)
  }

  function handleSetDelay(de: any) {
    setDelay(de)
  }

  function handleRandom() {
    setDelay(getRndInteger(100, 1000))
  }

  function handleStop() {
    setStop(true)
    setStop(false)
  }

  console.log("delay ", delay)

  const runClicks = useCallback(() => {
    const list = []

    for (let index = 0; index < cantidad; index++) {
      list.push(<TheClicks key={index} {...{ clicks, delay, stop }} />)
    }

    return list
  }, [cantidad, delay, stop])

  return (
    <Global>
      {runClicks()}

      <div>
        <button onClick={() => handleSetDelay(10)}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={() => handleSetDelay(5)}>5</button>
        <button onClick={() => handleSetDelay(10)}>10</button>
        <button onClick={() => handleSetDelay(20)}>20</button>
        <button onClick={() => handleSetDelay(30)}>30</button>
        <button onClick={() => handleSetDelay(40)}>40</button>
        <button onClick={() => handleSetDelay(50)}>50</button>

        <button onClick={() => handleSetDelay(100)}>100</button>

        <button onClick={() => handleSetDelay(200)}>200</button>

        <button onClick={() => handleSetDelay(300)}>300</button>

        <button onClick={() => handleSetDelay(400)}>400</button>

        <button onClick={() => handleSetDelay(500)}>500</button>

        <button onClick={() => handleSetDelay(600)}>600</button>

        <button onClick={() => handleSetDelay(700)}>700</button>

        <button onClick={() => handleSetDelay(800)}>800</button>

        <button onClick={() => handleSetDelay(900)}>900</button>
        <button onClick={() => handleSetDelay(1000)}>1000</button>
        <button onClick={() => handleSetDelay(1250)}>1250</button>
        <button onClick={() => handleSetDelay(1500)}>1500</button>
        <button onClick={() => handleSetDelay(1750)}>1750</button>
        <button onClick={() => handleSetDelay(2000)}>2000</button>
        <button onClick={() => handleSetDelay(3000)}>3000</button>
        <button onClick={() => handleSetDelay(4000)}>4000</button>
        <button onClick={() => handleSetDelay(5000)}>5000</button>

        <button onClick={() => handleRandom()}>Random</button>
      </div>

      <input
        type="number"
        min="10"
        max="5000"
        value={delay}
        onChange={handleDelayChange}
      />

      <div>
        <button onClick={() => setCantidad(0)}>0</button>
        <button onClick={() => setCantidad(1)}>1</button>
        <button onClick={() => setCantidad(5)}>5</button>
        <button onClick={() => setCantidad(10)}>10</button>
        <button onClick={() => setCantidad(15)}>15</button>
        <button onClick={() => setCantidad(20)}>20</button>
        <button onClick={() => setCantidad(25)}>25</button>
        <button onClick={() => setCantidad(30)}>30</button>
        <button onClick={() => setCantidad(60)}>60</button>
        <button onClick={() => setCantidad(100)}>100</button>
        <button onClick={() => setCantidad(125)}>125</button>
        <button onClick={() => setCantidad(150)}>150</button>
        <button onClick={() => setCantidad(200)}>200</button>
        <button onClick={() => setCantidad(500)}>500</button>

        <button onClick={() => setCantidad(600)}>600</button>

        <button onClick={() => setCantidad(700)}>700</button>

        <button onClick={() => setCantidad(800)}>800</button>
      </div>

      <h1>Count: {count}</h1>
      <h1>Cantidad: {cantidad}</h1>

      <div>
        <div ref={divRef1} onClick={() => showConsole("Nice")} />
        <div ref={divRef2} />
        <div ref={divRef3} />
        <div ref={divRef4} />
        <div ref={divRef5} />
      </div>
    </Global>
  )
}
