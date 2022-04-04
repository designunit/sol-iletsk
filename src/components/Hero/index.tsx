import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React from 'react'
import Image from 'next/image'
import { Flex } from '../Flex'
import unit from '../../../public/static/unit.jpg'
import gerb from '../../../public/static/gerb.png'


export const Hero: React.FC<{ titleText: string, description: string[] }> = ({ titleText, description }) => {

    return (
        <div className={s.container}>
            <Image
                src={'/static/bg.png'}
                layout='fill'
                objectFit='cover'
                priority
                loading='eager'
            />

            <div className={s.up}>
                <div>
                    <Title>
                        {titleText}
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
                        href={'/'}
                    >
                        ПОСМОТРЕТЬ КАРТУ ИДЕЙ
                    </Button>
                </Flex>
            </div>

            <div className={s.logos}>
                <div>
                    <Image
                        src={gerb}
                        objectFit='cover'
                    />
                </div>
                <div>
                    <a href='https://unit4.io/'>
                        <Image
                            src={unit}
                            objectFit='cover'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}