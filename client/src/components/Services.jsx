import Section from "./Section";
import Heading from "./Heading";
import { service1, service2,  check } from "../assets";
import image from "../assets/image.png"
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  
  Gradient,
 
} from "./design/Services";
import logo  from '../assets/logo.png';
import Generating from "./Generating";
import chatbotdemo from '../assets/collaboration/chatbot-demo.mp4' 


const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
         
          text="Yugm : Revolutionizing Knowledge Management with AI driven Accessibility & Security"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Yugm AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
            <div className="flex justify-start items-center">
            <img src={logo} width={100} height={20} alt="Yugm" />
             <h4 className="h4">Yugm AI</h4>
 
            </div>

              <p className="body-2 mb-[3rem] text-n-3 text-justify">
              The term "Yugm" meaning "pair" or "union" symbolizes the collaboration between employees and the AI."Yugm AI" reflects a modern approach to employee engagement and support, promoting a culture of collaboration and shared knowledge within the organization.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <br/>
          <br/>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[35rem] min-w-[48rem] border border-n-1/10 rounded-3xl overflow-hidden">
             

              <div className="absolute inset-0 flex flex-col justify-end align-middle p-4 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">

                {/* < className="h4 mb-4"> */}
                <div className="absolute inset-0 flex items-center justify-center p-3">
                <video
                  src={chatbotdemo}
                  className=" object-cover  "
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false} // Remove controls if you want it to autoplay seamlessly
                
                />
                </div>
               
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[26rem] ml-[130px]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 p-4">
                Streamline knowledge access across the entire organization.</h4>
                <p className="justify-center align-middle p-4 ">
                Yugm AI consolidates knowledge access by connecting with commonly-used knowledge bases, enabling employees to obtain tailored, precise, and current information with brief responses. Additionally, it recognizes knowledge gaps and takes the initiative to develop useful content to avoid recurring problems.
                </p>
               
              </div>

           
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
