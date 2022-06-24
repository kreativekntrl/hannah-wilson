import React from 'react';
import Footer from '../components/Footer';
import Layout from 'react-photo-gallery-react17';
import { photos } from "../components/Photos";

export default function Gallery() {
    return (
      <div>
            <Layout photos={photos} />
             <Footer />
      </div>
  )
}