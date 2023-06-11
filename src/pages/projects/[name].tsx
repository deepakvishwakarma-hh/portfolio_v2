import { project } from '@/type'
import data from '../../projects.json'
import { GetStaticProps, NextPage } from "next"
import Section from '@/components/loco/section'
import Header from "@/components/atoms/ProjectHeader"
import Footer from '@/components/atoms/ProjectFooter'
import TrackingText from '@/components/Animation/TextTracking';

const ProjectName: NextPage<project> = (props) => {
    const { name, index, story, image, gallary, overview, development, previous, next, live, github, year } = props
    return (
        <div className='main'>
            <Header {...{ name, index }} />

            <Section>
                <img src={image} alt="banner-image" />
                <p className='text-lg pt-5 text-gray flex items-center gap-2'>{year} <span className='text-sm'>●</span> {name}</p>
            </Section>

            <Section className='pt-[20rem] max-w-3xl'>
                <h3 className='4xl:text-h4-4xl 3xl:text-h4-3xl 2xl:text-h4-2xl xl:text-h4-xl lg:text-h4-lg md:text-h4-md text-h4-sm pb-10'>Overview</h3>
                <p className='text-lg'>{overview}</p>
            </Section>

            <Section className='ml-auto pt-[10rem] max-w-3xl'>
                <h3 className='4xl:text-h4-4xl 3xl:text-h4-3xl 2xl:text-h4-2xl xl:text-h4-xl lg:text-h4-lg md:text-h4-md text-h4-sm pb-10'>Story</h3>
                <p className='text-lg'>{story}</p>
            </Section>

            <Section className='pt-[10rem] max-w-3xl'>
                <h3 className='4xl:text-h4-4xl 3xl:text-h4-3xl 2xl:text-h4-2xl xl:text-h4-xl lg:text-h4-lg md:text-h4-md text-h4-sm pb-10'>Development</h3>
                <p className='text-lg'>{development}</p>
                <div className='flex gap-5'>
                    <TrackingText handleClick={() => { window.open(github) }} text="Github Link" className='text-lg mt-5 text-gray cursor-pointer' />
                    <TrackingText handleClick={() => { window.open(live) }} text="Live Demo" className='text-lg mt-5 text-gray cursor-pointer' />
                </div>
            </Section>

            <Section>
                {gallary.map((img, index) => (
                    <div className='flex even:justify-end py-[10rem]' key={index}>
                        <img
                            src={img}
                            alt="banner-image"
                            className='w-[80%]'
                        />
                    </div>
                ))}
            </Section>

            <Footer  {...{ previous, next }} />
        </div>
    )
}


export default ProjectName

export const getStaticPaths = async () => {
    const paths = data.map((page) => ({
        params: { name: page.slug },
    }));
    return {
        paths,
        fallback: false, // or "blocking" if needed
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pageData = data.find((page) => page.slug === params?.name);
    return {
        props: {
            ...pageData,
        },
    };
}




