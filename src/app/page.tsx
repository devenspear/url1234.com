'use client'

import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

export default function AlysBeachClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Function to start loading video
  const startVideoLoad = () => {
    const video = videoRef.current
    if (video) {
      console.log('Starting video load...')
      video.load() // Start loading the video
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setVideoLoaded(true)
        console.log('Video can play')
        // Try to play the video
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setVideoPlaying(true)
            console.log('Video started playing')
          }).catch((error) => {
            console.log('Autoplay failed, but video is ready:', error)
            setVideoPlaying(false)
            // Video is loaded but autoplay failed - user needs to interact
          })
        }
      }

      const handlePlay = () => {
        setVideoPlaying(true)
        console.log('Video play event')
      }

      const handlePause = () => {
        setVideoPlaying(false)
        console.log('Video pause event')
      }

      const handleLoadStart = () => {
        console.log('Video loading started')
      }

      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded')
      }

      const handleError = (e: Event) => {
        console.error('Video error:', e)
        console.error('Video error details:', {
          error: e,
          target: e.target,
          currentSrc: video?.currentSrc,
          networkState: video?.networkState,
          readyState: video?.readyState
        })
        setVideoError(true)
      }

      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const loaded = video.buffered.end(video.buffered.length - 1)
          const total = video.duration
          if (total > 0) {
            const percent = (loaded / total) * 100
            console.log(`Video loading progress: ${percent.toFixed(1)}%`)
          }
        }
      }

      // Add multiple event listeners for debugging
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('loadstart', handleLoadStart)
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('error', handleError)
      video.addEventListener('progress', handleProgress)

      // Auto-start loading after 3 seconds (or user can click button)
      const loadTimer = setTimeout(() => {
        startVideoLoad()
      }, 3000)

      return () => {
        clearTimeout(loadTimer)
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('loadstart', handleLoadStart)
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('error', handleError)
        video.removeEventListener('progress', handleProgress)
      }
    }
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl alys-nav-text text-gray-900">
                ALYS BEACH
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center alys-nav-text text-xs text-gray-900 hover:text-black transition-colors">
                  Real Estate
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center alys-nav-text text-xs text-gray-900 hover:text-black transition-colors">
                  Vacation
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <button className="alys-nav-text text-xs text-gray-900 hover:text-black transition-colors">
                About
              </button>
              <button className="alys-nav-text text-xs text-gray-900 hover:text-black transition-colors">
                Events
              </button>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-900 hover:text-black transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <div className="hidden lg:flex space-x-4">
                <button className="bg-gray-900 text-white px-4 py-2 alys-nav-text text-xs hover:bg-black transition-colors">
                  REAL ESTATE LISTINGS
                </button>
                <button className="border border-gray-900 text-gray-900 px-4 py-2 alys-nav-text text-xs hover:bg-gray-900 hover:text-white transition-colors">
                  BOOK YOUR STAY
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-900 hover:text-black"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t z-40 opacity-100 translate-y-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}
      </header>

      {/* Video Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        {/* Loading state */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
            <div className="text-center text-white">
              <div className="animate-pulse mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 animate-bounce"></div>
              </div>
              <p className="text-xl alys-body-text">Loading Alys Beach</p>
              <p className="text-sm mt-2 opacity-75">Video: 54 MB - Please wait...</p>
              <button 
                onClick={startVideoLoad}
                className="mt-4 px-6 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                Load Video Now
              </button>
            </div>
          </div>
        )}
        
        {/* Error state */}
        {videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-300 to-yellow-200">
            <div className="text-center text-gray-900">
              <h1 className="text-6xl md:text-8xl alys-heading-primary mb-6">
                ALYS BEACH
              </h1>
              <p className="text-xl alys-body-text">Experience luxury beachfront living</p>
            </div>
          </div>
        )}

        {/* Video element */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={true}
          style={{ objectPosition: 'center' }}
        >
          <source src="/Alys_Marianny_30s_Final-1.mp4" type="video/mp4" />
          <source src="https://alysbeach.com/wp-content/uploads/2021/02/Alys_Marianny_30s_Final-1.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        
        {/* Subtle overlay for better contrast */}
        {videoLoaded && (
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        )}
        
        {/* Click to play overlay - Always visible with better UX */}
        {videoLoaded && (
          <div 
            className="absolute inset-0 cursor-pointer flex items-center justify-center"
            onClick={() => {
              if (videoRef.current) {
                if (videoRef.current.paused) {
                  console.log('Playing video...')
                  videoRef.current.play().catch(e => console.error('Play failed:', e))
                } else {
                  console.log('Pausing video...')
                  videoRef.current.pause()
                }
              }
            }}
          >
            <div className="bg-black bg-opacity-60 rounded-full p-6 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110">
              {videoPlaying ? (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        )}

        {/* Video loading progress indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black bg-opacity-50 rounded p-2">
              <div className="text-white text-xs">Loading video... Check browser console for progress</div>
            </div>
          </div>
        )}
      </section>

      {/* Hero Text Section - Moved Below Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl alys-heading-primary mb-6 text-gray-900">
              REAL ESTATE
            </h1>
            <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl alys-heading-primary mb-12 text-gray-800">
              THE BEAUTY OF HOME
            </h2>
            <p className="text-lg md:text-xl alys-body-text max-w-3xl mx-auto mb-12 text-gray-700">
              To build a life at Alys Beach is to join a community designed for joy, beauty, and life abundant. 
              Every detail — from the town&apos;s master design to the careful consideration of each house built here — 
              has been intentionally crafted to create an unparalleled experience. A welcome respite. A home.
            </p>
          </div>
        </div>
      </section>

            {/* Why Alys Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl alys-heading-primary mb-4">
              WHY ALYS
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Architectural Excellence",
                description: "Every home meets the prestigious Fortified for safer living® standard"
              },
              {
                title: "Exclusive Community", 
                description: "Join a thoughtfully designed community focused on beauty and connection"
              },
              {
                title: "Coastal Lifestyle",
                description: "Experience unparalleled beach living with world-class amenities"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl alys-heading-secondary mb-4">{item.title}</h3>
                <p className="text-gray-600 alys-body-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl alys-heading-primary mb-4">
              THE PROCESS
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto alys-body-text">
              To join the Alys Beach community is to become part of a fully custom experience from start to finish. 
              Whether purchasing a forever home, constructing a dream getaway, or selecting refined finishes, 
              the Alys Beach Sales, Construction, and Design Team provide tailored service as you build a life here.
            </p>
          </div>
        </div>
      </section>

      {/* Alys Insider Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl alys-heading-secondary mb-6">
                Alys Insider
              </h2>
              <p className="text-gray-700 alys-body-text mb-8">
                Our exclusive quarterly e-newsletter, your inside look at the latest in Alys Beach real estate. 
                Whether you&apos;re searching for your dream home or staying informed on the evolving Alys Beach market, 
                we&apos;re here to keep you connected. Stay tuned for exclusive updates and unparalleled opportunities 
                in one of the most coveted coastal destinations in the country. To view the Spring 2025 Issue please click here.
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 alys-nav-text text-sm hover:bg-gray-800 transition-colors">
                Subscribe to Alys Insider
              </button>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Newsletter Preview Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fortified Construction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Construction Image</span>
            </div>
            <div>
              <h2 className="text-4xl alys-heading-secondary mb-6">
                Fortified...For Safer Living
              </h2>
              <p className="text-gray-700 alys-body-text mb-8">
                Since its founding, Alys Beach has maintained its own in-house construction company, 
                giving the highest level of attention and detail to the quality of new homes and buildings. 
                With our eight approved builders and approved architects list, Alys Beach is the first community 
                in the world to require that all homes meet the prestigious standard of Fortified… for safer living®.
              </p>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 alys-nav-text text-sm hover:bg-gray-50 transition-colors">
                Alys Beach Construction
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Somerset Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl alys-heading-secondary mb-6">
                The Somerset Program
              </h2>
              <p className="text-gray-700 alys-body-text mb-8">
                The Somerset Program brings together architects, Alys Beach Sales, and Alys Beach Construction 
                to create custom home designs through a seamless and efficient homebuilding process.
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 alys-nav-text text-sm hover:bg-gray-800 transition-colors">
                VIEW SOMERSET HOMES
              </button>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Somerset Homes Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Club Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Beach Club Image</span>
            </div>
            <div>
              <h2 className="text-4xl alys-heading-secondary mb-6">
                The Beach Club
              </h2>
              <p className="text-gray-700 alys-body-text mb-8">
                One of the town&apos;s most unique and beautiful amenities, the Beach Club offers Alys Beach residents 
                the most coveted beach experience in the region. The only owners-only amenity in Alys Beach, 
                the Beach Club offers a uniquely exclusive experience with three Gulf-front pools, a restaurant, 
                a chicly casual open-air lounge and game room and a third-floor bar with stunning views of the Gulf sunsets. 
                Live music, special events and exciting programming create a vibrant environment to spend time with family, 
                friends and your Alys Beach neighbors.
              </p>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 alys-nav-text text-sm hover:bg-gray-50 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl alys-heading-primary mb-6">
              Owner Services
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto alys-body-text">
              Owning at Alys Beach means peace of mind. It&apos;s knowing that your home is in caring hands and 
              that your needs will be met whether you&apos;re hours away or here in town. In addition to an experienced 
              security team here twenty four hours a day, in-home technology support, oversight of the access to 
              our valued amenities, and fee-based housekeeping and maintenance support upon request, we also offer 
              participation in a monthly service called the Property Owner Inspection program. This program provides 
              you with routine interior and exterior maintenance, home arrival and post-departure cleaning, and priority 
              storm preparation, among services.
            </p>
          </div>
          
          <div className="text-center">
            <button className="bg-gray-900 text-white px-8 py-3 alys-nav-text text-sm hover:bg-gray-800 transition-colors">
              CONNECT WITH ALYS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl alys-nav-text mb-4">ALYS BEACH</h3>
              <p className="text-gray-400 text-sm alys-body-text">
                9581 COUNTY HWY 30A EAST<br />
                ALYS BEACH, FLORIDA 32461
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p>General: 850.213.5500</p>
                <p>Rentals: 850.213.5555</p>
              </div>
            </div>
            
            <div>
              <h4 className="alys-nav-text text-sm mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Town Map</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beach Cam</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="alys-nav-text text-sm mb-4">POLICIES</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="alys-nav-text text-sm mb-4">FOLLOW US</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">©ALYS BEACH 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}