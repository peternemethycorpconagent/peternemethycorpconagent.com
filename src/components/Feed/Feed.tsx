import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";
import { Image } from "@/components/Image";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => {
  console.log(`${edges[0].node.frontmatter.socialImage}`);
  return (
    <div className={styles.feed}>
      {edges.map(edge => (
        <div className={styles.item} key={edge.node.fields.slug}>
          <Link to={edge.node.fields.slug}>
            <Image
              alt={edge.node.fields.slug}
              className={styles.image}
              path={`${edge.node.frontmatter.socialImage}`}
            />
          </Link>
          <div className={styles.meta}>
            <time
              className={styles.time}
              dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            >
              {new Date(edge.node.frontmatter.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                },
              )}
            </time>
            <span className={styles.divider} />
            <span className={styles.category}>
              <Link to={edge.node.fields.category} className={styles.link}>
                {edge.node.frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles.title}>
            <Link className={styles.link} to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles.description}>
            {edge.node.frontmatter.description}
          </p>
          <Link className={styles.more} to={edge.node.fields.slug}>
            Read
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
