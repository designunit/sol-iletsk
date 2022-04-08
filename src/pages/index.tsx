import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { PageLayout } from 'src/components/PageLayout'
import { NextSeo } from 'next-seo'

interface PageProps {

}

const Index: NextPage<PageProps> = props => {
    return (
        <PageLayout
            openModal={() => null}
        >
            <NextSeo
                title={`Развитие набережной реки Песчанки г. Соль-Илецк`}
                openGraph={{
                    title: `Развитие набережной реки Песчанки г. Соль-Илецк`,
                    description: `Сбор мнений жителей Соль-Илецка`,
                    images: [
                        {
                            url: '/static/bg.svg',
                            width: 1920,
                            height: 1080,
                        },
                    ],
                }}
            />
            <Hero
                titleText='Соль-Илецк'
                description={[]}
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