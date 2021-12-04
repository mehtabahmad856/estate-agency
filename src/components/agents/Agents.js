import React from 'react'
import Agent1 from '../../Images/agent-1.jpg'
import Agent2 from '../../Images/agent-4.jpg'
import Agent3 from '../../Images/agent-5.jpg'
import {
    AgentContainer,
    AgentContent,
    AgentH1,
    AgentH2,
    ImgContainer,
    AgentDiv,
    Name,

} from './AgentElements'
const Agents = () => {
    return (
        <>


            <AgentContainer>

                <AgentContent>
                    <AgentH1>Best Agents</AgentH1>
                    <AgentH2>All Agents</AgentH2>
                </AgentContent>

                <ImgContainer>
                {/* <AgentDiv> */}
                    <img src={Agent1} />
                    {/* </AgentDiv> */}
                    {/* <Name>Margaret Sotillo Escala</Name> */}


                    <img style={{margin: "0 10px"}} src={Agent2} />
                    <img src={Agent3} />
                </ImgContainer>


            </AgentContainer>






        </>
    )
}

export default Agents;
