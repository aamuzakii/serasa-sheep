import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_PROJECT } from "../graphql/queries";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Markup } from "interweave";

function Project() {
  const { id } = useParams();
  const [richText, setRichText] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_SINGLE_PROJECT, {
    fetchPolicy: "network-only",
    variables: { projectSysId: id },
  });

  useEffect(() => {
    let a = document.querySelector(".nav-container").style;
    // if (width < 425) {
    //   // mobile device
    a.position = "static";
    // } else {
    //   a.position = "sticky"
    //   // a.top = "20px"
    // }

    window.scrollTo(0, 0); // solve bug
  }, []);

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.project.description.json));
    }
  }, [data]);


  if (!data) return;

  let { description, picturesCollection } = data.project;

  return (
    <div className="container project-single">
      <div className="left">
        <div className="floating-par">
          <Markup content={richText} />
        </div>
      </div>
      <div className="right">
        {picturesCollection.items.map(({ url }, i) => (
          <img key={i} className="single-img" src={url} alt="" width={800} />
        ))}
      </div>
    </div>
  );
}

export default Project;
