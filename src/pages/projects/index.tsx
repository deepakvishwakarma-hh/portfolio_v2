import Head from 'next/head'
import data from '../../projects.json'
import Section from '@/components/loco/section'
import ProjectListItem from '@/components/atoms/Project'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'
export default function Home() {
    return (
        <>
            <Head>
                <title>Projects – Sahej Tuli</title>
                <meta name="description" content="Hello! I'm Sahej Tuli, A San Francisco based front-end web developer." />
            </Head>
            <div className='main'>
                <Section>
                    <TextRevealAnimation classNames='lg:py-[10rem] py-[5rem]' lines={['Selected', 'Works']} />
                    <section>
                        {data.map((item, index) => <ProjectListItem item={item} index={index} />)}
                    </section>
                </Section>

            </div>
        </>
    )
}