import React from 'react'
import Second from '../../Images/about-2.jpg';
import {
    EstateAgencyContainer,
    EstateSubContainer,
    ImgBox2Wrapper,
    Image2,
    LectusBoxWrapper,
    LectusH1,
    LectusSubBoxWrapper,
    LectusH2,
    Grey,
    Black,
    Underline,
    LectusP
} from './LectusElements';
const Lectus = () => {
    return (
        <>
            <EstateAgencyContainer>

                <EstateSubContainer>

                    <ImgBox2Wrapper>
                        <Image2 src={Second}></Image2>
                    </ImgBox2Wrapper>

                    <LectusBoxWrapper>
                        <LectusH1>
                            EstateAgency <br />
                            Exclusive Property
                        </LectusH1>

                    </LectusBoxWrapper>

                    <LectusSubBoxWrapper>

                        <LectusH2>
                            Sed <Grey>porttitor</Grey>  
                             <Black> lectus </Black> <br/> 
                            <Underline>nibh.</Underline>
                        </LectusH2>
                        <LectusP>
                            Mauris blandit aliquet elit, eget 
                            tincidunt nibh pulvinar a. Vivamus
                             magna justo, lacinia eget consectetur 
                             sed, convallis at tellus. Praesent 
                             sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Vestibulum ante
                               ipsum primis in faucibus orci luctus 
                               et ultrices posuere cubilia Curae; 
                               Donec velit neque, auctor sit amet
                                aliquam vel, ullamcorper sit amet ligula. 

                        <br /> 
                        <br/>
                        Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                        </LectusP>




                    </LectusSubBoxWrapper>

                </EstateSubContainer>

            </EstateAgencyContainer>
        </>
    )
}

export default Lectus
