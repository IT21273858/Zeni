import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import TaskIcon from "@mui/icons-material/Task";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function NestedList({ resources }: { resources: any[] }) {
  const [openDocument, setOpenDocument] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);
  const [openPdf, setOpenPdf] = React.useState(false);
  const [openVideo, setOpenVideo] = React.useState(false);

  const handleDocumentClick = () => {
    setOpenDocument(!openDocument);
  };
  const handleImageClick = () => {
    setOpenImage(!openImage);
  };
  const handlePdfClick = () => {
    setOpenPdf(!openPdf);
  };
  const handleVideoClick = () => {
    setOpenVideo(!openVideo);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1200,
        bgcolor: "background.paper",
        borderRadius: 5,
        marginTop: 2,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            width: "100%",
            maxWidth: 1200,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          Resources
        </ListSubheader>
      }
    >
      <>
        <ListItemButton onClick={handleImageClick}>
          <ListItemIcon>
            <ImageIcon />
          </ListItemIcon>
          <ListItemText primary="Image" />
          {openImage ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openImage} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {resources
              .filter((res) => res.type == "image" && res)
              .map((res, indx) => (
                <ListItemButton key={indx} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <WallpaperIcon />
                  </ListItemIcon>
                  <ListItemText primary={res.r_name ? res.r_name : ""} />
                </ListItemButton>
              ))}
          </List>
        </Collapse>

        <ListItemButton onClick={handlePdfClick}>
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="Pdf" />
          {openPdf ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openPdf} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {resources
              .filter((res) => res.type == "pdf" && res)
              .map((res, indx) => (
                <ListItemButton key={indx} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PictureAsPdfIcon />
                  </ListItemIcon>
                  <ListItemText primary={res.r_name} />
                </ListItemButton>
              ))}
          </List>
        </Collapse>
        <ListItemButton onClick={handleDocumentClick}>
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Documents" />
          {openDocument ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openDocument} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {resources
              .filter((res) => res.type == "document" && res)
              .map((res, indx) => (
                <ListItemButton key={indx} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <FolderOpenIcon />
                  </ListItemIcon>
                  <ListItemText primary={res.r_name} />
                </ListItemButton>
              ))}
          </List>
        </Collapse>
        <ListItemButton onClick={handleVideoClick}>
          <ListItemIcon>
            <OndemandVideoIcon />
          </ListItemIcon>
          <ListItemText primary="Video" />
          {openVideo ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openVideo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {resources
              .filter((res) => res.type == "video" && res)
              .map((res, indx) => (
                <ListItemButton key={indx} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>
                  <ListItemText primary={res.r_name} />
                </ListItemButton>
              ))}
          </List>
        </Collapse>
      </>
    </List>
  );
}
