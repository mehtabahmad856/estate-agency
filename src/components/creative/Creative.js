import React from 'react'
import { AboutContainer, CreativeH1, CreativeH2,
     Green,ImgBoxWrapper, Image, SquareBox,
      BoxTitle, Line, BoxTitle2, SquareBoxWrapper,
       BoxSubWrapper, Art,ImgBox2Wrapper,Image2
     } from './CreativeElements';
import First from '../../Images/slide-about-1.jpg';
// import Second from '../../Images/about-2.jpg';
const Creative = () => {
    return (
        <>
            <AboutContainer>
                <CreativeH1>We Do Great Design For Creative Folks</CreativeH1>
                <CreativeH2><Green>Home </Green>/ About</CreativeH2>
                
                <ImgBoxWrapper>
                <Image src={First}>

                </Image>

                <SquareBoxWrapper>
                    <BoxSubWrapper>
                        <SquareBox>

                            <BoxTitle>
                                EstateAgency
                            </BoxTitle>

                            <Line> </Line>

                        </SquareBox>
                        <BoxTitle2>
                            Since 2017
                        </BoxTitle2>
                        <Art>Art & Creative</Art>
                    </BoxSubWrapper>
                </SquareBoxWrapper>
                </ImgBoxWrapper>

               
            </AboutContainer>

            



        </>
    )
}

export default Creative;
