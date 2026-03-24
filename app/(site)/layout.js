import ThemeProvider from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SiteLayout({ children }) {
  return (
    <ThemeProvider>
      <Header />
      <div style={{ paddingTop: '96px' }}>
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  )
}
