import React from 'react';

import HeroSection from "./HeroSection.js"
import Quickintro from "./Quickintro.js"
import FeatureSection from "./FeatureSection.js"
import TrainingLocations from "./TrainingLocations.js"
import Fleet from "./Fleet.js"
import Programoverview from "./Programoverview.js"
import Blog from "./Blog.js"
import CTA from "./CTA.js"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Quickintro />
      <FeatureSection />
      <TrainingLocations />
      <Fleet />
      <Programoverview />
      <Blog />
      <CTA />
    </>
  )
}