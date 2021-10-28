import styled from "styled-components";
import NextImage from "next/image";
import { ImageProps } from "next/dist/client/image";
import React from "react";

const ImageWrapper = styled.div`
  width: 100%;
  > div {
    position: unset !important;
  }
`;

const InnerImage = styled(NextImage)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

// https://github.com/vercel/next.js/discussions/18739#discussioncomment-344932
// https://stackoverflow.com/a/65134645/8777320
export const ImageBackup: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <ImageWrapper>
        <InnerImage {...props} layout="fill" />
      </ImageWrapper>
    </div>
  );
};

// https://github.com/vercel/next.js/discussions/18739#discussioncomment-344932
// https://stackoverflow.com/a/65134645/8777320
export const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  // @ts-ignore
  return <img className={className} {...props} />;
};
