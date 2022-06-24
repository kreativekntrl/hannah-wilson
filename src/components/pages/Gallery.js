import React from 'react';
import Layout from 'react-photo-gallery-react17';
import { photos } from "../components/Photos";

const styles = {
  layout: {
    margin: "0 10px"
  }
}

export default function Gallery() {
    return (
<div>
  <div
    style={styles.layout}>
    <Layout photos={photos} />
    </div>
</div>
  )
}