import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { LanguageProvider } from './i18n'
import About from './pages/About'
import Announcements from './pages/Announcements'
import Classes from './pages/Classes'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Resources from './pages/Resources'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="classes" element={<Classes />} />
            <Route path="resources" element={<Resources />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
