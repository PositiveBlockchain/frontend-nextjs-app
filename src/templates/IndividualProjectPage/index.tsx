import Footer from "../partials/Footer/index";
import Header from "../partials/Header";
import React from "react";
import { withController } from "@/lib/withContoller";
import { Project } from "@/types";
import pick from "lodash/fp/pick";
import ReactPlayer from "react-player";
import NonSSRWrapper from "../../components/NonSSRWrapper";
import { Typography } from "@mui/material";
import Image from "next/image";

function useController(props: { projectData: Project }) {
  return props;
}
function IndividualProjectPageTemplate(
  props: ReturnType<typeof useController>
) {
  const { projectData } = props;

  let shortDescription =
    projectData["description_short_value_proposition_in_a_tweet"];

  if (shortDescription) {
    shortDescription =
      shortDescription[0].toUpperCase() + shortDescription.slice(1);
  }

  console.log("Project data", projectData);

  const additionalInfo = pick([], projectData);

  return (
    <div className="flex flex-col gap-10 h-full min-h-screen">
      <Header />
      <div className="flex flex-col h-full flex-1">
        <div className="prose max-w-none max-w-7xl mx-auto p-10 w-full h-full">
          <div className="container mx-auto">
            <div className="flex items-center gap-3">
              {projectData["logo_url"] && (
                <div>
                  <Image
                    src={projectData["logo_url"]}
                    alt="project logo"
                    width={100}
                    height={100}
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 ml-4">
                <Typography variant="h1" className="m-0">
                  {projectData["project_name"]}
                </Typography>
                <Typography variant="subtitle1">
                  {projectData["business_tagline"]}
                </Typography>
              </div>
            </div>
            <Typography variant="h2">{projectData["main_category"]}</Typography>
            <div>
              <b>Organization type: </b>
              <span>{projectData["organization_type"]}</span>
              <span>{projectData["organization_type"]}</span>
            </div>
            <b>Subcategories: </b>
            <span>{projectData["sub_categories"]?.join(", ")}</span>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="prose max-w-none max-w-7xl mx-auto mb-auto p-10 w-full h-full bg-white flex-1">
          <div className="container mx-auto flex justify-between gap-10">
            <div className="flex-2 w-2/3">
              <h3>Description</h3>
              <p>{projectData["long_description"]}</p>
            </div>
            <div className="flex-1">
              {projectData["video_url"] && (
                <NonSSRWrapper>
                  <ReactPlayer
                    className="mb-4"
                    url={projectData["video_url"]}
                  />
                </NonSSRWrapper>
              )}
              <div className="rounded border p-5">
                <h3 className="font-bold mb-2 mt-0">Additional Information</h3>
                {Object.keys(additionalInfo).map((key) => {
                  return (
                    <div key={key} className="mb-2">
                      <AttributeToInfoBlock
                        attribute={key}
                        projectData={additionalInfo}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AttributeToInfoBlock(props: { attribute: string; projectData: any }) {
  const { attribute, projectData } = props;
  const title = snakeCaseToSentenceCase(attribute);
  const content = projectData[attribute];

  return <InfoBlock title={title} content={content} />;
}

function InfoBlock(props: { title: string; content: string | string[] }) {
  const { title, content } = props;

  if (!content) {
    return null;
  }

  if (Array.isArray(content)) {
    return (
      <div>
        <b>{title}: </b>
        {content.map((item, index) => {
          return (
            <span key={index}>
              {item}
              {index !== content.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <b>{title}: </b>
      <span>{content}</span>
    </div>
  );
}

function snakeCaseToSentenceCase(str: string) {
  if (!str) return str;

  return str
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default withController(IndividualProjectPageTemplate, useController);
