import { useEffect } from 'react'
import Nav from 'components/Nav/index'
import Footer from 'components/Footer/index'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  className?: string
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { hideHeader = false, hideFooter = false, className = '', children } = props

  return (
    <>
      {!hideHeader && <Nav />}
      <div className="min-h-screen">
        <main className={className}>{children}</main>
      </div>
      {!hideFooter && <Footer />}
    </>
  )
}

export default DefaultLayout
