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
                    <Title style={{
                        color: 'var(--color-white)',
                    }}>
                        {titleText}
                    </Title>
                </div>

                <Flex
                    className={s.text}
                >
                    <div className={s.description}>
                        <Title level={2}>
                            Набережная <br />реки Песчанки
                        </Title>

                        <p>
                            Расскажите нам, каким вы видите будущее набережной реки Песчанки.
                        </p>
                        <Title level={3}>
                            Сделать это очень просто:
                        </Title>
                        <ul style={{
                            marginTop: '-.5rem',
                        }}>
                            <li>
                                Предложить идею. Поделитесь вашими идеями — что должно появиться на набережной? Как бы вам хотелось проводить там время?,
                            </li>
                            <li>
                                Описать ценности. Расскажите о ваших любимых местах на территории и о том, что важно сохранить при благоустройстве. Опишите, с чем ассоциируется это место — с каким событиями или фактами и почему это важно.,
                            </li>
                            <li>
                                Рассказать о проблеме. Обозначьте проблемы территории, которые можно решить в будущем.,
                            </li>
                        </ul>
                        <p>
                            Выберете то, о чем вы хотите рассказать, укажите точку на карте и напишите ваш комментарий. Мнение каждого важно, ведь так мы понимаем, как и чем живет сегодня набережная.
                        </p>
                        {/* {description.map((x, i) => <p key={i}> {x} </p>)} */}
                    </div>
                    <Button
                        href={'https://mesto.io/6XIF9T79M13LWSFZ'}
                        // @ts-ignore
                        target='_blank'
                    >
                        ПОСМОТРЕТЬ КАРТУ ИДЕЙ
                    </Button>

                    <Button
                        href={'https://docs.google.com/forms/d/e/1FAIpQLScmmYVDoCHTL3R6EzP105oKVsQs3NDNRkUidxCtSgUMQYe60Q/viewform'}
                        // @ts-ignore
                        target='_blank'
                    >
                        ПРОЙТИ ОПРОС
                    </Button>
                </Flex>
            </div>

            <div className={s.logos}>
                <a
                    href='https://soliletsk.ru/'
                    target={'_blank'}
                >
                    <Image
                        src={gerb}
                        objectFit='cover'
                    />
                </a>
                <a
                    href='https://unit4.io/'
                    target={'_blank'}
                >
                    <Image
                        src={unit}
                        objectFit='cover'
                    />
                </a>
            </div>
        </div>
    )
}