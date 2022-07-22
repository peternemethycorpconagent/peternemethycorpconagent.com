import React from "react";

import { graphql } from "gatsby";

import { ModalLayout } from "@/components/Layout";
import { Post } from "@/components/Post";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

interface Props {
  data: {
    markdownRemark: Node;
  };
}

const ModalPageTemplate: React.FC<Props> = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { frontmatter, fields } = data.markdownRemark;
  const { title, video, tags, description } = frontmatter;
  const { slug } = fields;
  const metaDescription = description || siteSubtitle;

  return (
    <ModalLayout
      title={`${title} - ${siteTitle}`}
      description={metaDescription}
      closeTo={slug}
      // socialImage={socialImage}
    >
      <VideoPlayer
          url={video}
          title={title}
          topics={tags}
          key={video}
      ></VideoPlayer>
    </ModalLayout>
  );
};

export const query = graphql`
  query ModalPageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
        video
      }
    }
  }
`;

export default ModalPageTemplate;

