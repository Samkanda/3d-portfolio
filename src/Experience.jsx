import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import Embed from './Embed'
import React, { useState } from 'react'


export default function Experience()
{    
    const [scale, setScale] = useState(1)
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    window.addEventListener('resize', handleResize)
    
    function handleResize() {
        if (window.innerWidth < 1000){
        setScale(.5)
        }
        else {
        setScale(1)

        }
    }
    return <>

        <color args={ [ '#241a1a' ] } attach="background" />

        <Environment files="./the_lost_city_1k.hdr" background blur={0.5} />

        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    scale={scale}
                    // rotation-x={ 0.13 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ -.03, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                        className='content'
                    >
                        <div className='wrapper'>
                        <Embed/>

                        </div>
                    </Html>
                </primitive>

                
                {scale == .5 ? <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ .4 }
                    position={ [ -.3, 1.1, .6 ] }
                    rotation-y={ -.5 }
                    maxWidth={ 2 }
                >
                    Navpreet Kanda
                </Text>
                : 
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ .8 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                    Navpreet Kanda
                </Text>
                }
             
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}