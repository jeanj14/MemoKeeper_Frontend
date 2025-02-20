import useNotes from "@api/useNotes";
import { Delete, Restore } from "@mui/icons-material";
import { Grid2 as Grid } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import NoRowsOverlay from "@ui/NoRowsOverlay";
import Confirmation from "@ui/Confirmation";
import { useState } from "react";

const NotesTable = () => {
  const { posts } = useNotes.useGetDelNotes();
  const { rstNotes } = useNotes.useRstNotes();
  const { forceDel } = useNotes.useForceDelNotes();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [mode, setMode] = useState("restore");

  const handleRestore = (id) => {
    rstNotes({ id, resource: "posts" });
  };

  const handleDeletePermanently = (id) => {
    forceDel({ id, resource: "posts" });
  };

  const handleToggle = (id, mode) => {
    setId(id);
    setMode(mode);
    setIsOpen((cur) => !cur);
    console.log(id, mode);
  };

  const rows = posts?.map((post) => {
    return { ...post };
  });

  const cols = [
    { field: "id", label: "Id" },
    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "content",
      headerName: "Content",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "deletedAt",
      headerName: "Deleted at",
      minWidth: 100,
      valueGetter: (params) => params.split("T")[0],
    },
    {
      field: "action",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: ({ id }) => [
        <GridActionsCellItem
          key={id}
          icon={<Restore />}
          label="Restore"
          onClick={() => handleToggle(id, "restore")}
        />,
        <GridActionsCellItem
          key={id}
          icon={<Delete />}
          label="Delete Permentily"
          onClick={() => handleToggle(id, "delete")}
        />,
      ],
    },
  ];

  return (
    <Grid
      className={`flex w-full flex-col justify-center ${!rows?.length && "!h-full"}`}
    >
      <DataGrid
        rows={rows}
        columns={cols}
        columnVisibilityModel={{ id: false }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        // autosizeOptions={{ expand: false }}

        // autosizeOnMount
        disableColumnMenu
        disableRowSelectionOnClick
        disableColumnResize
        slots={{
          noRowsOverlay: NoRowsOverlay,
        }}
      />
      <Confirmation
        open={isOpen}
        handleToggle={handleToggle}
        handleDelete={() => handleDeletePermanently(id)}
        handleRestore={() => handleRestore(id)}
        mode={mode}
      />
    </Grid>
  );
};

export default NotesTable;
