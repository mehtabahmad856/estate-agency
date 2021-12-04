import styled from "styled-components";
import {BsCart,BsCalendar4Week, BsCardChecklist} from 'react-icons/bs'
export const ServicesContainer=styled.div`
// height: 800px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background: #fff;

// @media screen and (max-width: 768px) {
//     height: 1100px;
// }

// @media screen and (max-width: 480px) {
//     height: 1300px;
// }
`;

export const ServicesWrapper=styled.div`
// max-width: 500px;
margin: 0 auto;
display: flex ;
// grid-template-columns:1fr;
align-items: center;
grid-gap: 10px;
// padding: 30 20px;





// @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
// }

// @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
// }
`;

export const ServicesCard=styled.div`
// background: #fff;
// display: flex;
// flex-direction: flex-start;
// align-items: center;
// margin-top: 120px;
// border-radius: 10px;
// max-height: 340px;
// padding: 30px;
// border: 4px solid #2eca6a;
// transition: all 0.2s ease-in-out;


// display: flex;
padding: 30px;
// margin-bottom: 30px;
// align-items: center;
// border: 4px solid #2eca6a;
// padding: 30px 20px;
// width: 35%;

// @:hover{
//     transform: scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
// }
`;
export const HeaderCard=styled.div`
display: flex;
// border: 4px solid #2eca6a;
// width: 65%;

// padding: 30px 20px;

display: flex;
margin-bottom: 30px;
align-items: center;
border: 5px solid #2eca6a;
padding: 20px 30px;
width: 35%;
// @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr 1fr;
// }

@media screen and (min-width: 480px) {
    // grid-template-columns: 1fr;
    // display: row;
    // padding: 0 20px;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1em;
  grid-row-gap: 100px;
}

`

export const ServicesIcon=styled.div`
// height: 16px;
// width: 16px;
// margin-bottom: 10px; 
// display: flex;
// border: 4px solid #2eca6a;
// width: 65%;
// align-items: center;
// padding: 30px 20px;
// border: 4px solid #2eca6a;
// height: 80%;
// margin-bottom: 30px;
// align-items: center;
// width: 40%;
margin-right:15px

`;

export const ServicesH1=styled.h1`
font-size:3rem;
color: #000;
font-weight: 600;
margin-bottom: 64px;
padding: 25px 80px;

// @media screen and (max-width: 480px) {
//     font-size: 2rem;
// }



// @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr 1fr;
// }

// @media screen and (min-width: 480px) {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
// }
`;


export const BsCart1 = styled(BsCart)`
 

 font-size: 5rem;
 font-weight: 600;

`;
export const BsCart2 = styled(BsCalendar4Week)`
 

 font-size: 5rem;
 font-weight: 600; 
 
`;
export const BsCart3 = styled(BsCardChecklist)`
 
 
 font-size: 5rem;
 font-weight: 600; 
 
`;


export const ServicesH2=styled.h2`
// align-self: center;
font-size: 2.5rem;
// margin-bottom: 10px;
font-weight: 600;
// margin-left:-60px
margin-right: 15px;
// @media screen and (max-width: 480px) {
//     font-size: 2rem;
//     display:column;
// }



`;

export const ServicesP=styled.p`
font-size: 1rem;
text-align: center;
`;

export const FooterCard=styled.div`
// display: flex;
flex-direction: row;
`;

export const FooterLink=styled.button`
border: none;
background:none;
font-size: 1rem;
padding: 5px;
font-weight: bold;
`;

export const FooterIcon = styled.span`
    margin-left: 10px;
`;
