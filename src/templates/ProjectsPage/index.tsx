import Footer from "../partials/Footer/index";
import Header from "../partials/Header";
import InputBase from "@mui/material/InputBase";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectGrid from "@/components/ProjectGrid";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import { useController } from "./useController";
import { withController } from "@/lib/withContoller";

function ProjectPageTemplate(props: ReturnType<typeof useController>) {
  const { projectData, handleSearch, filters, handleFilterUpdate } = props;

  return (
    <div className="flex flex-col gap-10 h-full min-h-screen">
      <Header />
      <div className="prose max-w-none max-w-7xl mx-auto p-10 w-full h-full">
        <h1>Project Directory</h1>
        <div className="flex justify-center w-full">
          <div className="m-auto border rounded p-2">
            <Search>
              <SearchIcon />
            </Search>
            <InputBase
              className="w-52"
              placeholder="Type to filter (ex. logistics)"
              onChange={handleSearch}
            />
          </div>
        </div>
        <p>{projectData["project_name"]}</p>
        <div className="flex gap-3 w-full">
          <div className="min-w-3/12">
            <ProjectFilter filters={filters} onChange={handleFilterUpdate} />
          </div>
          <ProjectGrid
            className="flex-1 min-w-9/12"
            projectData={projectData}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withController(ProjectPageTemplate, useController);