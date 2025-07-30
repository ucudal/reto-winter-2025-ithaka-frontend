import React from 'react'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps {
  children: ReactNode
  href: string
}

function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }
 
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(href)
  }
 
  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
 
export default ActiveLink