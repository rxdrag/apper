import React from "react"
import clx from 'classnames'

export interface IProps{
  className?: string;
  style?: React.CSSProperties;
}

export interface IPageContainerProps extends IProps{
  children?: React.ReactNode
}

export const PageContainer = (props: IPageContainerProps) => {
  const { children, className, ...other } = props
  return (
    <div className={clx(className, 'rx_page_container')} {...other}>{children}</div>
  )
}