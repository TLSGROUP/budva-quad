'use client';

import Description from '@/components/description'
import Footer from '@/components/footer'
import Header from '@/components/header' // Или изменить имя файла на Navbar
import OurPrice from '@/components/ourPrice'
import PhotoSlider from '@/components/PhotoSlider'
import BlockVideo from '@/components/videoBlock'
import React from 'react'

export default function Home() {
  
  return (
    <div>
      <Header />
      <BlockVideo />
      <OurPrice />
      <PhotoSlider />
      <Description />
      <Footer />
    </div>
  );
}
