import axiosInstance from "@api/axiosInstance";

const add = async ({ data, resource }) => {
  console.log(data, resource);
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

// const upd = ()

// const rst = ()

const queries = {
  add,
  del,
  get,
  // upd,
  // rst
};

export default queries;
