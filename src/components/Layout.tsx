import { Container } from "@mantine/core"
import { PropsWithChildren } from "react"
import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"
 
export default function Layout({children} :  PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <Container className="public-wrap">
      {children}       
      </Container>
      <SiteFooter />   
    </>
  )
}