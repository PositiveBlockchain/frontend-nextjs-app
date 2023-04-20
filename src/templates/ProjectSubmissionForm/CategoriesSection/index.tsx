import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import omit from "lodash/fp/omit";
import SingleCategoryBlock from "./SingleCategoryBlock";
import { useCategories } from "./useCategories";
import { config } from "../../../configuration";

const { maxCategories } = config.constants;

interface CategoriesFormWrapperProps {
  categories: Record<string, string[]>;
}

function useController(props: CategoriesFormWrapperProps) {
  const { categories } = useCategories();
  console.log(categories);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const methods = useFormContext();

  const [categoryBlocks, setCategoryBlocks] = useState<
    {
      id: string;
      categories: Record<string, string[]>;
    }[]
  >([
    {
      id: "category-" + 1,
      categories: {},
    },
  ]);

  useEffect(() => {
    setCategoryBlocks([
      {
        id: "category-" + 1,
        categories,
      },
    ]);
  }, [categories]);

  methods.watch(() => {
    if (categoryBlocks.length === 0) return;

    const _selectedCategories = categoryBlocks.map((form) => {
      return methods.getValues(form.id);
    });

    setSelectedCategories(_selectedCategories);
  });

  function addForm() {
    setCategoryBlocks([
      ...categoryBlocks,
      {
        id: "category-" + (categoryBlocks.length + 1),
        categories: omit(selectedCategories, categories),
      },
    ]);
  }

  const removeForm = (formId: string) => {
    setCategoryBlocks(
      categoryBlocks.filter((block: { id: string }) => block.id !== formId)
    );
  };

  return {
    categoryBlocks,
    addForm,
    removeForm,
  };
}

const CategoriesFormWrapper = (props: CategoriesFormWrapperProps) => {
  const { categoryBlocks, addForm, removeForm } = useController(props);
  const firstBlock = categoryBlocks[0];

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="w-full" key={firstBlock.id}>
        <Typography variant="overline">Primary Category *</Typography>
        <div className="w-full flex">
          <SingleCategoryBlock {...firstBlock} />
        </div>
      </div>
      <Typography variant="overline">
        Additional categories (optional)
      </Typography>
      {categoryBlocks.slice(1).map((block, idx) => (
        <div className="w-full" key={block.id}>
          <div className="w-full flex">
            <SingleCategoryBlock {...block} />
            <IconButton
              aria-label="delete"
              onClick={() => removeForm(block.id)}
            >
              <Delete />
            </IconButton>
          </div>
        </div>
      ))}
      <Button
        variant="contained"
        className="bg-green-500"
        onClick={() => addForm()}
        disabled={categoryBlocks.length === maxCategories}
      >
        Add Category
      </Button>
    </div>
  );
};

CategoriesFormWrapper.defaultProps = {
  categories: {
    "Art & Design": ["Graphic Design", "Illustration", "Photography"],
    "Business & Finance": ["Accounting", "Business", "Economics"],
    "Education & Teaching": ["Education", "Teaching"],
  },
};

export default CategoriesFormWrapper;
