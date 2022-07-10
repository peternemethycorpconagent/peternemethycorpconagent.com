import React from "react";
import Helmet from "react-helmet";
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import { useSiteMetadata } from "@/hooks";

import * as styles from "./Layout.module.scss";

interface Props {
  title: string;
  description?: string;
  socialImage?: string;
  children: React.ReactNode;
}

const ModalLayout: React.FC<Props> = ({
  children,
  title,
  description,
  socialImage = "",
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
                    <React.Fragment>
                    <Link to={closeTo}>
                      Close
                    </Link>
                    {children}
                  </React.Fragment>
          
        )}
      </ModalRoutingContext.Consumer>
    </div>
  );
};

export default ModalLayout;
