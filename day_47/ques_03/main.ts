async function fetchData() {
  // Assuming fetchsomething returns a promise
  const data = await fetchSomething();
  console.log(data);
  //the await keyword pause the execution untilthe promise settles, and then resumes with the resolved value
}
console.log(
  "The await keyword allows asynchronous , promise-based behavior to be written in a cleaner, more linear fashion."
);
//this demonstrattes how await improves readibility anf flow in asynchronous code
