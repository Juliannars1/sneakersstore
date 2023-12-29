import server from ".";
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server ${PORT} listening on`);
});
