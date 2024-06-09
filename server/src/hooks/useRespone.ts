const ResponseData = (
  data: object = {},
  message: string = "",
  status: boolean = false
) => {
  return {
    data,
    message,
    status,
  };
};

export default ResponseData;
