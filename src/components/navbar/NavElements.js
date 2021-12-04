import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import {Link as LinkS} from "react-scroll";


export const Nav=styled.nav`
background: #fff;
height: 80px;
// margin-top: -80px;
display:flex;
justify-content:center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index:10;



@media screen and (max-width:960) {
    transition:0.8s all case;
}
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
height: 150px;
padding:0 24px;
// max-width:1100px;
box-shadow: 1px 2px 15px rgba(100, 100, 100, 0.3);

`;


export const NavLogo = styled(LinkR)`
color:#000;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;

&:hover {
    color: #2eca6a;
    text-decoration: none;
}
`;
export const Green = styled.span`
color: #2eca6a;
`

export const MobileIcon = styled.div`
display:none;


@media screen and (max-width:768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-2550%,70%);
    font-size:1.8rem;
    cursor:pointer;
    color:#000;
}
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-display:none;
    text-align:center;
    margin-right:-22px;
    list-style-type:none;
    font-weight:bold;

    


   


    @media screen and (max-width:768px) {
        display:none;
        
    }
`;


export const NavItem = styled.li`
height:80px;


`;

export const NavLinks = styled(LinkR)`
color:#000;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&:hover {
   
    text-decoration: underline;
    color: #2eca6a;
}


&.active {
    border-bottom:3px solid #01bf71;
}
`;

export const NavBtn = styled.nav`
display:flex;
align-items:center;

@media screen and(max-width:768px) {
    display:none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover {
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
    
}
`;

export const Menu = styled(LinkR)`
// border-top: 0;
//   border-left: 4px solid #2eca6a;
//   border-right: 0;
//   border-bottom: 0;
//   transform: translate3d(0px, 40px, 0px);
//   opacity: 0;
//   filter: alpha(opacity=0);
//   visibility: hidden;
//   transition: all 0.5s cubic-bezier(0.3, 0.65, 0.355, 1) 0s, opacity 0.31s ease 0s, height 0s linear 0.36s;
//   margin: 0;
//   border-radius: 0;
//   padding: 12px 0;
  

//   @media (min-width: 768px) {
//       border-top: 4px solid #2eca6a;
//       border-left: 0;
//       display: block;
//       position: absolute;
//       box-shadow: 0 2px rgba(17, 16, 15, 0.1), 0 2px 10px rgba(20, 19, 18, 0.1);
    
//   }


// padding: 12px 18px;
//   transition: all 500ms ease;
//   font-weight: 600;
//   min-width: 220px;

//   background-color: #ffffff;
//   color: #2eca6a;
//   transition: all 500ms ease;

//   background-color: #ffffff;
//   color: #2eca6a;

//   transform: translate3d(0px, 0px, 0px);
//   visibility: visible;
//   opacity: 1;
//   filter: alpha(opacity=1);


border-top: 4px solid #2eca6a;
    border-left: 0;
    display: block;
    position: absolute;
    box-shadow: 0 2px rgba(17, 16, 15, 0.1), 0 2px 10px rgba(20, 19, 18, 0.1);

    padding: 12px 18px;
//   transition: all 500ms ease;
  font-weight: 600;
  min-width: 220px;


//   transition: all 0.1s ease-in-out;
//     position: relative;
    // padding-left: 0;
    // padding-right: 0;

  &.hover {
    background-color: #ffffff;
  color: #2eca6a;
  transition: all 500ms ease;
}

background-color: #ffffff;
  color: #2eca6a;



// @media (min-width: 768px) {
//     margin-left: 15px;
        
//       }
  
      
   



`;


  

