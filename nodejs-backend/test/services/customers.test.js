const assert = require("assert");
const app = require("../../src/app");

describe("customers service", () => {
  let thisService;
  let customerCreated;

  beforeEach(async () => {
    thisService = await app.service("customers");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (customers)");
  });

  describe("#create", () => {
    const options = {"name":"new value","userId":"aasdfasdfasdfadsfadfa"};

    beforeEach(async () => {
      customerCreated = await thisService.create(options);
    });

    it("should create a new customer", () => {
      assert.strictEqual(customerCreated.name, options.name);
assert.strictEqual(customerCreated.userId, options.userId);
    });
  });

  describe("#get", () => {
    it("should retrieve a customer by ID", async () => {
      const retrieved = await thisService.get(customerCreated._id);
      assert.strictEqual(retrieved._id, customerCreated._id);
    });
  });

  describe("#update", () => {
    let customerUpdated;
    const options = {"name":"updated value","userId":"345345345345345345345"};

    beforeEach(async () => {
      customerUpdated = await thisService.update(customerCreated._id, options);
    });

    it("should update an existing customer ", async () => {
      assert.strictEqual(customerUpdated.name, options.name);
assert.strictEqual(customerUpdated.userId, options.userId);
    });
  });

  describe("#delete", () => {
  let customerDeleted;
    beforeEach(async () => {
      customerDeleted = await thisService.remove(customerCreated._id);
    });

    it("should delete a customer", async () => {
      assert.strictEqual(customerDeleted._id, customerCreated._id);
    });
  });
});