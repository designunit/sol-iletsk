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
                title={`Соль-Илецк: Набережная реки Песчанки`}
                openGraph={{
                    title: `Соль-Илецк: Набережная реки Песчанки`,
                    description: `Сбор мнений жителей Соль-Илецка`,
                    images: [
                        {
                            url: '/static/bg.png',
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