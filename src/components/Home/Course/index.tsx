import { CardCouse } from '../CardCouse'
import { ContainerCouse, Courses } from './styles'
import course1 from '../../../assets/course/1.svg'


export function Course() {
    return(
        <ContainerCouse>
            <h1>Our best courses for you</h1>
            <Courses>
                <CardCouse 
                    svg={course1} 
                    title='Product Designer' 
                    description='Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.'
                />
                <CardCouse 
                    svg={course1} 
                    title='Product Designer' 
                    description='Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.'
                />
                <CardCouse 
                    svg={course1} 
                    title='Product Designer' 
                    description='Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.'
                />
                <CardCouse 
                    svg={course1} 
                    title='Product Designer' 
                    description='Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.'
                />
                <CardCouse 
                    svg={course1} 
                    title='Product Designer' 
                    description='Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.'
                />
                <CardCouse 
                    svg={course1} 
                    title='Product Designer' 
                    description='Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.'
                />
            </Courses>
        </ContainerCouse>
    )
}