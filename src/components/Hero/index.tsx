import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import Image from 'next/image'
import { Flex } from '../Flex'
import { Section } from '../Section'
import alrosa from '../../../public/static/alrosa.svg'

export const Hero: React.FC<{ titleText: string, description: string[] }> = ({ titleText, description }) => {

    return (
        <div className={s.container}>
            <Image
                src={'/static/bg.jpg'}
                layout='fill'
                objectFit='cover'
                priority
                loading='eager'
            />
            <div className={s.alrosa}>
                <Image
                    src={alrosa}
                    objectFit='cover'
                />
            </div>

            <div className={s.up}>
                <div className={s.h1}>
                    <Title>
                        <div>
                            {titleText}
                        </div>
                    </Title>
                </div>

                <Flex
                    mobileReverse
                    className={s.text}
                >
                    <div className={s.description}>
                        {description.map((x, i) => <p key={i}> {x} </p>)}
                    </div>
                    <Button
                        href={'https://mesto.io/OOPR6D0CAYYC73M2'}
                    >
                        ПОСМОТРЕТЬ КАРТУ ИДЕЙ
                    </Button>
                </Flex>
            </div>
        </div>
    )
}