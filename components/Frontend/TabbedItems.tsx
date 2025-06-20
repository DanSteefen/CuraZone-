
"user client"
import { TabItem, Tabs } from "flowbite-react";
import {HiUserCircle} from 'react-icons/hi';
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";
export default function TabbedItems() {

  const services = [
    {
      title : "Tele Health",
      image : "/doctor.jpg",
      slug : "tele-health"
    },
    {
      title : "Vedio prescription refill",
      image : "/doctor-prescription.jpg",
      slug : "vedio-prescription-refill"
    },
    {
      title : "In person doctor visit",
      image : "/doctor-visit.jpg",
      slug : "in-person-doctor-visit"
    },
    {
      title : "UTI consult",
      image : "/UTI.jpg",
      slug : "UTI-consult"
    },
  ];

  const tabs = [
    { 
      title : "Popular Services",
      icon : Stethoscope,
      component : <ServiceList data = {services}/>,
      content : []
    },
    { 
      title : "Doctors",
      icon : Microscope,
      component : <LinkCards/>,
      content : []
    },
    { 
      title : "Specialists",
      icon : Activity,
      component : <LinkCards className="bg-blue-900"/>,
      content : []
    },
    { 
      title : "Symptoms",
      icon : Syringe,
      component : <LinkCards className="bg-purple-950"/>,
      content : []
    },
  ];

  return (
    <Tabs aria-label="Default tabs" variant="default">
      {
        tabs.map((tab, i) => {
          return(
            <TabItem key={i} active title={tab.title} icon={tab.icon}>
              {tab.component}
            </TabItem>
          );
        })
      };
    </Tabs>
  );
}
