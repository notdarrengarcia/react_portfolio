import React from 'react'
import SkillsSection from '../Components/SkillsSection';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
            <SkillsSection skill={'Javascript'} progress={'75%'} width={'75%'}/>
            <SkillsSection skill={'React JS'} progress={'65%'} width={'65%'}/>
            <SkillsSection skill={'CSS/SASS'} progress={'95%'} width={'95%'}/>
            <SkillsSection skill={'Node JS'} progress={'80%'} width={'80%'}/>
            <SkillsSection skill={'ReactNative'} progress={'20%'} width={'20%'}/>
            <SkillsSection skill={'UI/UX Design'} progress={'75%'} width={'75%'}/>
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} 
                text={'With my knowledge in HTML, CSS, SASS, Bootstrap, and a series of different databases. Im certain I can make the website you need.'}
                />
                <ServicesSection image={intelligence} title={'Intuitive Interface'} 
                text={'First thought when creating anything should be the user interface. I always strive to create a unique and easy interactive website to use.'}
                />
                <ServicesSection image={gamedev} title={'App Development'} 
                text={'New to the world of mobile development. I have been taking courses and learning React Native extensively to create a stunning and intuitive apps.'}
                />
                
            </div>
        </div>
    )
}

export default AboutPage;

