"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const megaMenu = [
    {
        title : "Top Booked",
        services : [
            {
                title : "Telehealth",
                slug : "tele-health",
                description : "It allows patients to consult with doctors, receive diagnoses, and get treatment recommendations without visiting a clinic or hospital in person. Telehealth improves access to care, especially in rural or underserved areas, and is useful for follow-ups, mental health, chronic disease management, and more."
            },
             {
                title : "Vedio prescription refill",
                slug : "vedio-prescription-refill",
                description : "allows patients to consult with a doctor over a secure video call to renew or adjust their existing prescriptions. This convenient method ensures continuity of care without needing an in-person visit—ideal for managing chronic conditions, ongoing treatments, or routine medication refills. It saves time, increases accessibility, and maintains medical oversight."
            },
             {
                title : "In person doctor visit",
                slug : "in-person-doctor-visit",
                description : "allows patients to schedule and attend physical appointments at a clinic or hospital. This option is essential for thorough physical examinations, diagnostic tests, treatments that require direct contact, or cases where video consultation is not sufficient. It ensures hands-on care and face-to-face interaction with healthcare providers."
            },
             {
                title : "UTI consult",
                slug : "UTI-consult",
                description : "offers fast and discreet medical consultation for Urinary Tract Infections. Patients can speak with a licensed doctor—either through video or in-person—about symptoms like burning urination, frequent urges, or discomfort. Based on the assessment, appropriate testing and treatment (including prescriptions) can be provided quickly and efficiently."
            },
        ],
    },
    {
        title : "Doctors",
        services : [
            {
                title : "Telehealth",
                slug : "tele-health",
                description : "It allows patients to consult with doctors, receive diagnoses, and get treatment recommendations without visiting a clinic or hospital in person. Telehealth improves access to care, especially in rural or underserved areas, and is useful for follow-ups, mental health, chronic disease management, and more."
            },
             {
                title : "Vedio prescription refill",
                slug : "vedio-prescription-refill",
                description : "allows patients to consult with a doctor over a secure video call to renew or adjust their existing prescriptions. This convenient method ensures continuity of care without needing an in-person visit—ideal for managing chronic conditions, ongoing treatments, or routine medication refills. It saves time, increases accessibility, and maintains medical oversight."
            },
             {
                title : "In person doctor visit",
                slug : "in-person-doctor-visit",
                description : "allows patients to schedule and attend physical appointments at a clinic or hospital. This option is essential for thorough physical examinations, diagnostic tests, treatments that require direct contact, or cases where video consultation is not sufficient. It ensures hands-on care and face-to-face interaction with healthcare providers."
            },
             {
                title : "UTI consult",
                slug : "UTI-consult",
                description : "offers fast and discreet medical consultation for Urinary Tract Infections. Patients can speak with a licensed doctor—either through video or in-person—about symptoms like burning urination, frequent urges, or discomfort. Based on the assessment, appropriate testing and treatment (including prescriptions) can be provided quickly and efficiently."
            },
        ],
    },
    {
        title : "Speciality",
        services : [
            {
                title : "Telehealth",
                slug : "tele-health",
                description : "It allows patients to consult with doctors, receive diagnoses, and get treatment recommendations without visiting a clinic or hospital in person. Telehealth improves access to care, especially in rural or underserved areas, and is useful for follow-ups, mental health, chronic disease management, and more."
            },
             {
                title : "Vedio prescription refill",
                slug : "vedio-prescription-refill",
                description : "allows patients to consult with a doctor over a secure video call to renew or adjust their existing prescriptions. This convenient method ensures continuity of care without needing an in-person visit—ideal for managing chronic conditions, ongoing treatments, or routine medication refills. It saves time, increases accessibility, and maintains medical oversight."
            },
             {
                title : "In person doctor visit",
                slug : "in-person-doctor-visit",
                description : "allows patients to schedule and attend physical appointments at a clinic or hospital. This option is essential for thorough physical examinations, diagnostic tests, treatments that require direct contact, or cases where video consultation is not sufficient. It ensures hands-on care and face-to-face interaction with healthcare providers."
            },
             {
                title : "UTI consult",
                slug : "UTI-consult",
                description : "offers fast and discreet medical consultation for Urinary Tract Infections. Patients can speak with a licensed doctor—either through video or in-person—about symptoms like burning urination, frequent urges, or discomfort. Based on the assessment, appropriate testing and treatment (including prescriptions) can be provided quickly and efficiently."
            },
        ],
    },
    {
        title : "Symptoms",
        services : [
            {
                title : "Telehealth",
                slug : "tele-health",
                description : "It allows patients to consult with doctors, receive diagnoses, and get treatment recommendations without visiting a clinic or hospital in person. Telehealth improves access to care, especially in rural or underserved areas, and is useful for follow-ups, mental health, chronic disease management, and more."
            },
             {
                title : "Vedio prescription refill",
                slug : "vedio-prescription-refill",
                description : "allows patients to consult with a doctor over a secure video call to renew or adjust their existing prescriptions. This convenient method ensures continuity of care without needing an in-person visit—ideal for managing chronic conditions, ongoing treatments, or routine medication refills. It saves time, increases accessibility, and maintains medical oversight."
            },
             {
                title : "In person doctor visit",
                slug : "in-person-doctor-visit",
                description : "allows patients to schedule and attend physical appointments at a clinic or hospital. This option is essential for thorough physical examinations, diagnostic tests, treatments that require direct contact, or cases where video consultation is not sufficient. It ensures hands-on care and face-to-face interaction with healthcare providers."
            },
             {
                title : "UTI consult",
                slug : "UTI-consult",
                description : "offers fast and discreet medical consultation for Urinary Tract Infections. Patients can speak with a licensed doctor—either through video or in-person—about symptoms like burning urination, frequent urges, or discomfort. Based on the assessment, appropriate testing and treatment (including prescriptions) can be provided quickly and efficiently."
            },
        ],
    },
];

export function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className="space-x-4">
        {
            megaMenu.map((item, i) => {
                return(
                    <NavigationMenuItem key={i}>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.services.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                href={`/services${component.slug}`}
                                >
                                {component.description}
                                </ListItem>
                            ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                )
            })
        }
    </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
