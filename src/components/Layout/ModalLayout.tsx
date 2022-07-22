import React from "react";
import Helmet from "react-helmet";
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { navigate } from 'gatsby';
import Modal from "react-modal";
import { AllMarkdownRemark, ModalPageContext } from "@/types";

import { useSiteMetadata } from "@/hooks";
import * as styles from "./Layout.module.scss";

Modal.setAppElement("#___gatsby");
Modal.defaultStyles.overlay.backgroundColor = "black";


interface Props {
  title: string;
  description?: string;
  socialImage?: string;
  slug: string;
  closeTo: string;
  children: React.ReactNode
}

const ModalLayout: React.FC<Props> = ({
  children,
  title,
  description,
  socialImage = "",
  closeTo
}: Props) => {
  debugger;
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
        {() => {
          debugger;
          return (
          <React.Fragment>
             <Modal 
              isOpen={true}
              onRequestClose={() => navigate(closeTo)}
              shouldCloseOnEsc={true}
              shouldCloseOnOverlayClick={true}
            >
              <button className="button" onClick={() => navigate(closeTo)}>X</button>
              {children}
            </Modal>
           
          </React.Fragment>         
        )}}
      </ModalRoutingContext.Consumer>
    </div>
  );
};

export default ModalLayout;
