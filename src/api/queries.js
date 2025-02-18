import axiosInstance from "@api/axiosInstance";

const add = async ({ data, resource }) => {
  const queryURL = `/${resource}`;
  await axiosInstance.post(queryURL, data);
};

const del = async ({ id, resource }) => {
  const deleteId = id.id;
  const queryURL = `/${resource}/?id=${deleteId}`;
  await axiosInstance.delete(queryURL);
};

const get = async ({ resource, query }) => {
  const queryURL = `/${resource}/?${query}`;
  const res = await axiosInstance.get(queryURL);
  return res;
};

const upd = async ({ id, data, resource }) => {
  const queryURL = `/${resource}/?id=${id}`;
  const res = await axiosInstance.patch(queryURL, data);
  return res;
};

const getDelNotes = async ({ resource, query }) => {
  const queryURL = `/${resource}/?${query}&deleted=true`;
  const data = await axiosInstance.get(queryURL);
  const posts = data?.posts.filter((post) => {
    return post.deletedAt !== null;
  });

  return { posts };
};

const rstNotes = async ({ id, resource }) => {
  const rstId = id.id;
  const queryURL = `/${resource}/restore/?id=${rstId}`;
  await axiosInstance.get(queryURL);
};

const queries = {
  add,
  del,
  get,
  upd,
  getDelNotes,
  rstNotes,
};

export default queries;
