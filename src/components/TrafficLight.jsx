import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/components/trafficLight.module.css'

export default function TrafficLight() {

    const [redColor, setRedColor] = useState("hsl(0, 45%, 35%)")
    const [yellowColor, setYellowColor] = useState("hsl(104, 47%, 23%)")
    const [greenColor, setGreenColor] = useState("hsl(104, 47%, 23%)")

    const [redIsActive, setRedIsActive] = useState(false)
    const [yellowIsActive, setYellowIsActive] = useState(false)
    const [greenIsActive, setGreenIsActive] = useState(false)


    const activateRed = () => {
        setRedIsActive(!redIsActive)
        setYellowIsActive(false)
        setGreenIsActive(false)
    }
    useEffect (() => {
        {redIsActive ? setRedColor("hsl(0, 59%, 40%)") : setRedColor("hsl(0, 45%, 35%)")}
    }, [redIsActive])


    const activateYellow = () => {
        setYellowIsActive(!yellowIsActive)
        setRedIsActive(false)
        setGreenIsActive(false)
    }
    useEffect (() => {
        {yellowIsActive ? setYellowColor("hsl(54, 100%, 60%)") : setYellowColor("hsl(54, 57%, 41%)")}
    }, [yellowIsActive])

    

    const activateGreen = () => {
        setGreenIsActive(!greenIsActive)
        setRedIsActive(false)
        setYellowIsActive(false)
    }
    useEffect (() => {
        {greenIsActive ? setGreenColor("hsl(104, 51%, 37%)") : setGreenColor("hsl(104, 47%, 23%)")}
    }, [greenIsActive])

  return (
    <div className={styles.content}>
        <header>

            <div>
                <h1> Semáforo </h1>
                <img src="./icons/traffic-light.png" alt="" />
                <h3> Desafio - Dev Júnior </h3>
            </div>
            <p> Sistema de sinalização por meio de luzes, como um semáforo <br /> de trânsito, onde apenas uma luz deve ficar acesa por vez. </p>

        </header>
        <main>
            <div className={styles.semaforo}>
                <button onClick={activateRed} > <div className={styles.red} style={{ backgroundColor: redColor }} > </div> </button>
                <button onClick={activateYellow}> <div className={styles.yellow} style={{ backgroundColor: yellowColor }} > </div> </button>
                <button onClick={activateGreen} > <div style={{ backgroundColor: greenColor }} className={styles.green}> </div> </button>
            </div>
        </main>
    </div>
  )
}
