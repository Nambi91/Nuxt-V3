export default defineEventHandler(async (event) => {
  console.log("is name matched", event.context);
  return `Hello, ${event.context.params.name}!`;
});
