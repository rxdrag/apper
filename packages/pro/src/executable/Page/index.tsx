import React from "react"

export interface IPageProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  hasBreadcrumb?: boolean;
  showGoback?: boolean;
}

const Page = (props: IPageProps) => {
  return (
    <div>
      Page
    </div>
  )
}

export default Page