import useNotes from "@api/useNotes";
import { Restore } from "@mui/icons-material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

const NotesTable = () => {
  const { posts } = useNotes.useGetDelNotes();
  // const navigate = useNavigate();
  const { rstNotes } = useNotes.useRstNotes();

  const handleRestore = (id) => {
    rstNotes({ id, resource: "posts" });
  };

  const rows = posts?.map((post) => {
    return { ...post };
  });

  const cols = [
    { field: "id", label: "Id" },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      resizable: false,
    },
    {
      field: "content",
      headerName: "Content",
      width: 200,
    },
    {
      field: "deletedAt",
      headerName: "Deleted at",
      width: 200,
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
          onClick={() => handleRestore(id)}
        />,
      ],
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={cols}
      columnVisibilityModel={{ id: false }}
    />
  );
};

export default NotesTable;
