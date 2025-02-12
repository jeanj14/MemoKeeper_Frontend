import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import queries from "@api/queries";
import { useEffect } from "react";

const useGetPosts = () => {
  const [query] = useSearchParams();

  console.log(...query);

  const {
    isPending,
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
  return { isPending, posts, error };
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

const useNotes = {
  useGetPosts,
  useAddNotes,
  useDelNotes,
};

export default useNotes;
