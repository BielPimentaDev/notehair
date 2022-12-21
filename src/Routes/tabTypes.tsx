import { ComponentProps } from "react"

export interface TabInterface{
    icon: any,
    active_icon: any,
    component: React.FC,
    name: string,
    title: string,
    label: string,
  }