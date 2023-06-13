import data from '../projects.json'
import { useRouter } from 'next/router'
import Section from '@/components/loco/section'
import OutlineText from '@/components/Animation/OutlineText'
import TrackingText from '@/components/Animation/TextTracking'
import LargeTextWithImages from '@/components/atoms/LargeTextWithImages'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'
const Home = () => {
  const router = useRouter()

  const handleSeeProjects = () => {
    router.push('/projects')
  }
  const handleSeeAboutMe = () => {
    router.push('/about')
  }



  return (
    <div className="main">

      <Section>

        <TextRevealAnimation
          classNames='lg:pt-[10rem] pt-[5rem]'
          lines={[
            "Hello! I'm",
            'Sahej Tuli,',
            'a San Francisco',
            'based front-end',
            'web developer.']} />

        <section className='lg:pt-[300px] pt-[5rem]  lg:w-[50%] ml-auto pb-[5rem]'>
          <p className='lg:text-lg text-smd font-medium'>  I am a 21-year-old student currently pursuing a Bachelor's degree in Computer Science at San Francisco State University.
            <br /><br /> My passion lies in creating stunning websites that leave a lasting impression.  With a keen eye for design and a focus on delivering exceptional user experiences,  I strive to craft digital masterpieces that combine aesthetics and functionality.   <br /><br />
            As I refine my skills in coding languages, user experience design, and front-end development, I'm actively on the lookout for exciting opportunities to apply my knowledge and contribute to real-world projects. <br /> </p>

          <p className='lg:text-lg text-smd pt-[3rem] font-medium'>Scroll on, brave scroller!</p>

          <TrackingText handleClick={handleSeeAboutMe} text="Learn more about me →" className='text-lg text-gray mt-5 cursor-pointer' />

        </section>

      </Section>

      <Section>

        {[data[0], data[1]].map((project) => (
          <LargeTextWithImages
            href={project.slug}
            heading={project.name}
            second_image_url={project.gallary[1]}
            first_image_url={project.gallary[0]}
            discription={project.overview} />
        ))}

        <TrackingText handleClick={handleSeeProjects} text="See all projects →" className='text-lg text-gray mt-5 cursor-pointer' />

      </Section>

      <Section>
        <h1 className='4xl:text-h2-4xl 3xl:text-h2-3xl 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg md:text-h2-md text-h2-sm !font-extrabold '>To get in touch,</h1>
        <OutlineText onClick={() => { window.location.href = "mailto:hello@sahejtuli.com" }} classNames='4xl:text-h2-4xl 3xl:text-h2-3xl 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg md:text-h2-md text-h2-sm !font-extrabold cursor-pointer' text='Email me!' />
        <div className='flex gap-5 px-2 mt-5'>
          <TrackingText handleClick={() => { window.open("https://linkedin.com/in/sahejtuli") }} text="LinkedIn" className='text-lg text-gray cursor-pointer' />
          <TrackingText handleClick={() => { window.open("https://github.com/sahejt") }} text="GitHub" className='text-lg text-gray cursor-pointer' />
        </div>
      </Section>
    </div>
  )
}

export default Home

