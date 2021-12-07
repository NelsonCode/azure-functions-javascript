const httpFunction = require("../HttpTrigger1");
const context = require("./defaultContext");

test("Http trigger should return known text", async () => {
  await httpFunction(context);

  expect(context.log.mock.calls.length).toBe(1);
  expect(context.res.body).toEqual({
    message: "success",
  });
});
