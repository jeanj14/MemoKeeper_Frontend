import queries from "@api/queries";
import { setMsg } from "@store/toaster.slice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const useGetPosts = () => {
  const [query] = useSearchParams();

  const {
    isLoading,
    data: { posts } = [],
    error,
  } = useQuery({
    queryKey: query.size === 0 ? ["notes"] : ["notes", ...query],
    queryFn: async () =>
      await queries.get({ resource: "posts", query }).catch((e) => {
        console.error(e);
        return [];
      }),
    retry: false,
    throwOnError: true,
  });
  return { isLoading, posts, error };
};

const useAddNotes = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: addNotes } = useMutation({
    mutationFn: async (data) => await queries.add({ data, resource: "posts" }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      dispatch(setMsg({ msg: "A new note was added!", status: "success" }));
    },
    onError: (error) => {
      console.error("Error adding note:", error);
      dispatch(
        setMsg({ msg: "There was an error adding note", status: "error" }),
      );
    },
  });
  return { addNotes };
};
const useDelNotes = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: delNotes } = useMutation({
    mutationFn: async (id) => await queries.del({ id, resource: "posts" }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      queryClient.invalidateQueries(["notes-deleted"]);
      dispatch(
        setMsg({ msg: "Note deleted successfully!", status: "success" }),
      );
    },
    onError: (error) => {
      console.error("Error deleting note:", error);
      dispatch(
        setMsg({ msg: "There was an error deleting note", status: "error" }),
      );
    },
  });
  return { delNotes };
};

const useUpdNotes = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: updNotes } = useMutation({
    mutationFn: async ({ id, data }) => {
      await queries.upd({ id, data, resource: "posts" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      dispatch(setMsg({ msg: "Note updated with success", status: "success" }));
    },
    onError: (error) => {
      console.error("Error updating note:", error);
      dispatch(
        setMsg({ msg: "There was an error updating note:", status: "error" }),
      );
    },
  });
  return { updNotes };
};

const useGetDelNotes = () => {
  const [query] = useSearchParams();

  const {
    isLoading,
    data: { posts } = [],
    error,
  } = useQuery({
    // queryKey: query.size === 0 ? ["notes"] : ["notes", ...query],
    queryKey: ["notes-deleted"],
    queryFn: async () =>
      await queries.getDelNotes({ resource: "posts", query }).catch((e) => {
        console.error(e);
        return [];
      }),
    retry: false,
    throwOnError: true,
  });
  return { isLoading, posts, error };
};

const useRstNotes = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: rstNotes } = useMutation({
    mutationFn: async (id) => await queries.rstNotes({ id, resource: "posts" }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      queryClient.invalidateQueries(["notes-deleted"]);
      dispatch(
        setMsg({ msg: "Note restored successfully!", status: "success" }),
      );
    },
    onError: (error) => {
      console.error("Error restoring  note:", error);
      dispatch(
        setMsg({ msg: "There was an error restoring note", status: "error" }),
      );
    },
  });
  return { rstNotes };
};

const useNotes = {
  useGetPosts,
  useAddNotes,
  useDelNotes,
  useUpdNotes,
  useGetDelNotes,
  useRstNotes,
};

export default useNotes;
