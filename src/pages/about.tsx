import Section from '@/components/loco/section'
import TrackingText from '@/components/Animation/TextTracking'
import LocomotiveDivider from '@/components/atoms/LocomotiveDivider'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'

export default function About() {
    return (
        <div className="main">
            <Section>
                <TextRevealAnimation
                    classNames='lg:pt-[10rem] pt-[5rem]'
                    lines={[
                        'Welcome, you',
                        'beautiful',
                        "hooman! Here's",
                        'my story...']} />

                <section className='lg:pt-[200px] pt-[5rem] lg:w-[50%] ml-auto pb-[5rem]'>
                    <p className='text-lg'>
                        Hello there! My name is Sahej, and I am delighted to have the chance to share my journey with you.
                        <br />
                        <br />

                        It was during my 7th grade that I was first introduced to the mesmerizing world of web development and design. Fascinated by the way websites were created and the intricate details behind their captivating designs, I found myself drawn towards the art and science of crafting digital experiences. I began exploring the fundamentals of HTML, CSS, and JavaScript, eagerly experimenting with various elements and coding techniques to bring my creative visions to life.
                        <br />
                        <br />

                        As the years have passed, my passion for web development and design has only intensified. I have devoted countless hours to honing my skills, mastering various programming languages, and staying abreast of the latest trends and advancements in the industry. <br /> <br /> Along this journey, I have had the privilege of working on diverse projects, collaborating with talented individuals, and witnessing firsthand how the websites I create can make a tangible impact in the digital landscape.                        <br />
                        <br />
                        <br />
                        <div className='flex gap-10'>
                            <TrackingText handleClick={() => { window.open("https://linkedin.com/in/sahejtuli") }} text="LinkedIn" className='text-lg text-gray cursor-pointer' />
                            <TrackingText handleClick={() => { window.open("https://github.com/sahejt") }} text="Github" className='text-lg text-gray cursor-pointer' />
                        </div>
                    </p>
                </section>
            </Section>

            <LocomotiveDivider />

            <section data-scroll-section>
                <section
                    data-scroll
                    data-scroll-speed="5"

                    className='grid lg:grid-cols-[2fr_2fr] pt-[15rem] gap-5'>
                    <div>
                        <h3 className="text-[70px] font-[800]">Top Skills</h3>
                        <p className='text-lg mb-10'>View all skills on <TrackingText handleClick={() => { window.open("https://linkedin.com/in/sahejtuli") }} text='LinkedIn' className='inline !text-blue cursor-pointer' /> </p>

                    </div>

                    <div className='grid grid-cols-2 gap-1'>
                        <p className='text-lg'>HTML</p>
                        <p className='text-lg'>CSS</p>
                        <p className='text-lg'>Javascript</p>
                        <p className='text-lg'>Typescript</p>
                        <p className='text-lg'>React JS</p>
                        <p className='text-lg'>Node JS</p>
                        <p className='text-lg'>Next JS</p>
                        <p className='text-lg'>Redux JS</p>
                        <p className='text-lg'>Framer Motion</p>
                        <p className='text-lg'>MongoDB</p>
                        <p className='text-lg'>Firebase/Firestore</p>
                        <p className='text-lg'>Java</p>
                        <p className='text-lg'>Python</p>
                        <p className='text-lg'>C/C++</p>
                        <p className='text-lg'>Solidity</p>
                    </div>

                </section>

                <section
                    data-scroll
                    data-scroll-speed="5"
                    className='grid lg:grid-cols-[2fr_2fr] pt-[10rem] gap-5'>
                    <div>
                        <h3 className="text-[70px] font-[800]">Education</h3>
                    </div>
                    <div>
                        <p className='text-lg mb-10'>I am pursuing a Bachelor's degree in Computer Science at <br></br><TrackingText handleClick={() => { window.open("https://sfsu.edu") }} text='San Francisco State University' className='inline !text-blue cursor-pointer' />. I am expected to graduate in Spring 2024.</p>
                        <p className='text-lg mb-10'>Throughout my time at San Francisco State University, I have been exposed to a comprehensive curriculum that encompasses both theoretical foundations and practical applications. From studying algorithms and data structures to delving into software development and system architecture, each course has equipped me with the essential tools and expertise necessary to thrive in the ever-evolving field of Computer Science.
                        </p>
                    </div>
                </section>

                <section
                    data-scroll
                    data-scroll-speed="5"
                    className='grid lg:grid-cols-[2fr_2fr] pt-[10rem] gap-5'>
                    <div>
                        <h3 className="text-[70px] font-[800]">Experience</h3>
                        <p className='text-lg mb-10'>View all experience on <TrackingText handleClick={() => { window.open("https://linkedin.com/in/sahejtuli") }} text='LinkedIn' className='inline !text-blue cursor-pointer' /> </p>

                    </div>
                    <div>
                        <p className='text-lg mb-10'>I am currently serving as a software engineer intern at <TrackingText handleClick={() => { window.open("https://lightbeam.ai") }} text='Lightbeam.ai' className='inline !text-blue cursor-pointer' />, a San Jose based pioneer in data security & privacy automation. My primary focus is on front-end development which includes designing and implementing responsive layouts, developing interactive features, and optimizing website performance. <br /><br />Simultaneously, I am also honored to hold the position of Webmaster at the <TrackingText handleClick={() => { window.open("https://career.sfsu.edu") }} text='CLD Department' className='inline !text-blue cursor-pointer' /> in San Francisco State University. <br /><br />These opportunities have provided me with a unique and diverse set of experiences in the field of software engineering. </p>

                    </div>
                </section>

                <section
                    data-scroll
                    data-scroll-speed="5" className='grid lg:grid-cols-[2fr_2fr] pt-[10rem] gap-5'>
                    <div>
                        <h3 className="text-[70px] font-[800]">Hobbies</h3>
                    </div>
                    <div>
                        <p className='text-lg mb-10'>My hobbies include photography and cooking. I find joy in capturing moments through the lens, exploring different perspectives, and documenting the beauty of the world around me. </p>
                        <p className='text-lg mb-10'>Cooking is another passion of mine, as I enjoy experimenting with flavors, trying new recipes, and creating delicious dishes to share with family and friends. </p>
                        <p className='text-lg mb-10'>Additionally, I find great pleasure in playing chess, which challenges my strategic thinking and allows me to engage in a game of skill and intellect.
                        </p>
                    </div>
                </section>

            </section>
            <LocomotiveDivider />
        </div>
    )
}



