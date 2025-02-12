import queries from "@api/queries";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

  const { mutate: addNotes } = useMutation({
    mutationFn: async (data) => await queries.add({ data, resource: "posts" }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
    onError: (error) => {
      console.error("Error adding note:", error);
    },
  });
  return { addNotes };
};
const useDelNotes = () => {
  const queryClient = useQueryClient();

  const { mutate: delNotes } = useMutation({
    mutationFn: async (id) => await queries.del({ id, resource: "posts" }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
    onError: (error) => {
      console.error("Error deleting note:", error);
    },
  });
  return { delNotes };
};

const useUpdNotes = () => {
  const queryClient = useQueryClient();

  const { mutate: updNotes } = useMutation({
    mutationFn: async ({ id, data }) => {
      console.log("inside mutation", { id, data });
      await queries.upd({ id, data, resource: "posts" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
    onError: (error) => {
      console.error("Error updating note:", error);
    },
  });
  return { updNotes };
};

const useNotes = {
  useGetPosts,
  useAddNotes,
  useDelNotes,
  useUpdNotes,
};

export default useNotes;
