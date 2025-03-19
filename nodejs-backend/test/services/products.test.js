const assert = require("assert");
const app = require("../../src/app");

describe("products service", () => {
  let thisService;
  let productCreated;

  beforeEach(async () => {
    thisService = await app.service("products");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (products)");
  });

  describe("#create", () => {
    const options = {"name":"new value","price":"new value"};

    beforeEach(async () => {
      productCreated = await thisService.create(options);
    });

    it("should create a new product", () => {
      assert.strictEqual(productCreated.name, options.name);
assert.strictEqual(productCreated.price, options.price);
    });
  });

  describe("#get", () => {
    it("should retrieve a product by ID", async () => {
      const retrieved = await thisService.get(productCreated._id);
      assert.strictEqual(retrieved._id, productCreated._id);
    });
  });

  describe("#update", () => {
    let productUpdated;
    const options = {"name":"updated value","price":"updated value"};

    beforeEach(async () => {
      productUpdated = await thisService.update(productCreated._id, options);
    });

    it("should update an existing product ", async () => {
      assert.strictEqual(productUpdated.name, options.name);
assert.strictEqual(productUpdated.price, options.price);
    });
  });

  describe("#delete", () => {
  let productDeleted;
    beforeEach(async () => {
      productDeleted = await thisService.remove(productCreated._id);
    });

    it("should delete a product", async () => {
      assert.strictEqual(productDeleted._id, productCreated._id);
    });
  });
});