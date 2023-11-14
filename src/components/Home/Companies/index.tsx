import { ContainerCompanies, ContainerLogos } from './styles'
import logo1 from '../../../assets/companies/1.svg'
import logo2 from '../../../assets/companies/2.svg'
import logo3 from '../../../assets/companies/3.svg'
import logo4 from '../../../assets/companies/4.svg'
import logo5 from '../../../assets/companies/5.svg'
import logo6 from '../../../assets/companies/6.svg'
import logo7 from '../../../assets/companies/7.svg'
import logo8 from '../../../assets/companies/8.svg'
import logo9 from '../../../assets/companies/9.svg'
import logo10 from '../../../assets/companies/10.svg'


export function Companies() {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10]
    return (
        <ContainerCompanies>
            <h1>
            Collaborate with 100+ <br/> leading universities and companies
            </h1>
            <p>
                WOC has contributed to students so that they can work in their dream company, 
                <br/> 
                we will continue to stick to our commitment to create an advanced generation,
            </p>

            <ContainerLogos>
                {logos.map(logo => (
                    <img src={logo} alt="" />
                ))}
            </ContainerLogos>
        </ContainerCompanies>
    )
}