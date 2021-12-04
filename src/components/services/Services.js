import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
// import One from '../../Images/shoppingcart.png';
// import Two from '../../Images/shoppingcart.png';
// import Three from '../../Images/shoppingcart.png';
// import {BsChevronDoubleRight} from 'react-icons/bs'
import { ServicesContainer,ServicesH1,ServicesWrapper,
ServicesCard,HeaderCard,ServicesIcon,BsCart1,BsCart2,BsCart3,ServicesH2,
ServicesP,FooterCard,FooterLink,FooterIcon } from './ServicesElements';



const Services = () => {
    return (
        <>
         <ServicesContainer id="services">
             <ServicesH1>Our Services</ServicesH1>
             <ServicesWrapper>
                 <ServicesCard>
                     <HeaderCard>
                     <ServicesIcon><BsCart1 /></ServicesIcon>
                     <ServicesH2>
                         Lifestyle
                     </ServicesH2>
                     </HeaderCard>
                     <ServicesP>Sed porttitor lectus nibh.Cras ultricies ligula sed magna dictum porta.Praesent sapien massa,convallis a pellentesquenec, egestas non nisi.
                     </ServicesP>
                     <FooterCard>
                     <FooterLink>Read more
                         <FooterIcon><BsChevronDoubleRight /></FooterIcon>
                     </FooterLink>
                 </FooterCard>
                 </ServicesCard>
                 
                 <ServicesCard>
                     <HeaderCard>
                     <ServicesIcon><BsCart2/></ServicesIcon>
                     <ServicesH2>
                         Loans
                     </ServicesH2>
                     </HeaderCard>
                     <ServicesP>Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                     </ServicesP>
                     <FooterCard>
                     <FooterLink>Read more
                     <FooterIcon><BsChevronDoubleRight /></FooterIcon>
                     </FooterLink>
                 </FooterCard>

                 </ServicesCard>
                
                 <ServicesCard>
                     <HeaderCard>
                     <ServicesIcon><BsCart3/></ServicesIcon>
                     <ServicesH2>
                         Sell
                     </ServicesH2>
                     </HeaderCard>
                     <ServicesP>Sed porttitor lectus nibh.Cras ultricies ligula sedmagna dictum porta.Praesent sapien massa,convallis a pellentesque nec, egestas non nisi.
                     </ServicesP>
                     <FooterCard>
                     <FooterLink>Read more
                     <FooterIcon><BsChevronDoubleRight /></FooterIcon>
                     </FooterLink>
                 </FooterCard>
                 </ServicesCard>
                 
             </ServicesWrapper>
            </ServicesContainer>
            
        </>
    )
}

export default Services;
