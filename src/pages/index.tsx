import { GetStaticProps, NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageLayout } from 'src/components/PageLayout'
import React, { useContext, useState } from 'react'
import { ConfigContext } from 'src/context/config'
import { NextSeo } from 'next-seo'
import Error from 'next/error'
import { Modal } from 'src/components/Modal'
import { WhatIs } from 'src/components/WhatIs'
import Image from 'next/image'

interface PageProps {

}

const Index: NextPage<PageProps> = props => {

    return (
        <PageLayout
            openModal={() => null}
        >
            <NextSeo
                title={`Соль-Илецк`}
                openGraph={{
                    title: `Соль-Илецк`,
                    images: [
                        { url: '/static/bg.png' },
                    ],
                }}
            />
            <Hero
                titleText='Соль-Илецк'
                description={[
                    'Всем привет!',
                    'Это команда развития города Мирный, сформированная при поддержке компании АЛРОСА.',
                    'Мы хотим улучшить город Мирный и превратить его в один из самых комфортных северных городов на Земле.',
                    'Благодарим вас за участие в разработке концепции развития Мирного.',
                    'Цель данного проекта – сформировать комплексное видение, на основе которого будет проводиться масштабная работа по улучшению качества городской среды.',
                    'На протяжении месяца вы предлагали свои замечания и идеи по улучшению города. Мы внимательно их все изучим. Они помогут сделать концепцию более детальной и «народной».',
                    'Спасибо за ваши ответы!',
                ]}
            />
        </PageLayout>
    )
}


// export const getStaticProps: GetStaticProps = async (ctx) => {
//     return {
//         props: {

//         }
//     }
// }

export default Index