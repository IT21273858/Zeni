import { useState } from "react";
import Swal from "sweetalert2";

const CreateModule = () => {
  const [isresource, setIsresource] = useState(false);
  const [resource, setResource] = useState<any>(null);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Swal.bindClickHandler();

  if (isresource) {
    Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        image: "Image",
        pdf: "Pdf",
        document: "Document",
        video: "Video",
      },
      inputPlaceholder: "Select a Resource",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "image") {
            Swal.fire({
              title: "Select image",
              input: "file",
              inputAttributes: {
                accept: "image/*",
                "aria-label": "Upload your profile picture",
              },
            });
            setResource(value);

            resolve();
          } else if (value === "pdf") {
            Swal.fire({
              title: "Select image",
              input: "file",
              inputAttributes: {
                accept: ".pdf",
                "aria-label": "Upload your Pdf here",
              },
            });
          } else if (value === "document") {
            Swal.fire({
              title: "Select document",
              input: "file",
              inputAttributes: {
                accept: ".doc, .docx,",
                "aria-label": "Upload your Document here",
              },
            });
          } else if (value === "video") {
            Swal.fire({
              title: "Select image",
              input: "url",
              inputLabel: "Upload your Video Url here",
            });
          } else {
            Swal.fire("Please selected anytthing :)");
            resolve("You need to select atleast anything :)");
            setIsresource(false);
          }
        });
      },
    });
    console.log("Re", resource);

    if (resource) {
      Toast.fire({
        icon: "success",
        title: "Upload in successfully",
      });
    }
  }
};

export default CreateModule;
