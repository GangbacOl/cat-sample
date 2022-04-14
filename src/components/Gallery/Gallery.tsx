import styled from 'styled-components';

import GalleryItem from '@components/Gallery/GalleryItem';

const Gallery = () => {
  return (
    <GalleryWrap>
      <GalleryItem />
    </GalleryWrap>
  );
};

const GalleryWrap = styled.article``;

export default Gallery;
