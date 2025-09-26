import React from 'react'
import SiteIndex from './pages/SiteIndex.jsx'
import SiteStudyDestinationAustralia from './pages/SiteStudyDestinationAustralia.jsx'
import SiteStudyDestinationCanada from './pages/SiteStudyDestinationCanada.jsx'
import SiteStudyDestinationIreland from './pages/SiteStudyDestinationIreland.jsx'
import SiteStudyDestinationNewzealand from './pages/SiteStudyDestinationNewzealand.jsx'
import SiteStudyDestinationUk from './pages/SiteStudyDestinationUk.jsx'
import SiteStudyDestinationUsa from './pages/SiteStudyDestinationUsa.jsx'

export default [
  { path: '/', element: React.createElement(SiteIndex) },
  { path: '/site', element: React.createElement(SiteIndex) },
  { path: '/site/study-destination/australia', element: React.createElement(SiteStudyDestinationAustralia) },
  { path: '/site/study-destination/canada', element: React.createElement(SiteStudyDestinationCanada) },
  { path: '/site/study-destination/ireland', element: React.createElement(SiteStudyDestinationIreland) },
  { path: '/site/study-destination/newzealand', element: React.createElement(SiteStudyDestinationNewzealand) },
  { path: '/site/study-destination/uk', element: React.createElement(SiteStudyDestinationUk) },
  { path: '/site/study-destination/usa', element: React.createElement(SiteStudyDestinationUsa) },
]
