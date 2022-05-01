import { FC, ReactNode } from 'react'
import Public from './layouts/public'
import User from './layouts/user'

const layouts = {
  public: Public,
  user: User,
}

export type PropsLayout = {
  typeLayout: keyof typeof layouts
  children: ReactNode
}

const Layout: FC<PropsLayout> = (props) => {
  const { typeLayout, children } = props
  console.log(typeLayout)

  const Getlayout = layouts[typeLayout ?? 'public']
  return <Getlayout {...props}> {children}</Getlayout>
}

export default Layout
