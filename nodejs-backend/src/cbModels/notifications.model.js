module.exports = function (app) {
  const modelName = "notifications";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      toUser: {
        type: Schema.Types.ObjectId,
        ref: "users",
        comment:
          "ToUser, dropdown, false, true, true, true, true, true, true, users, users, one-to-one, name,",
      },
      content: {
        type: String,
        required: true,
        comment:
          "Content, p, false, true, true, true, true, true, true, , , , ,",
      },
      path: {
        type: String,
        required: true,
        comment: "Path, p, false, true, true, true, true, true, true, , , , ,",
      },
      method: {
        type: String,
        required: true,
        comment:
          "Method, p, false, true, true, true, true, true, true, , , , ,",
      },
      data: {
        type: String,
        required: true,
        comment: "Data, p, false, true, true, true, true, true, true, , , , ,",
      },
      reacordId: {
        type: String,
        required: true,
        comment:
          "Reacord Id, p, false, true, true, true, true, true, true, , , , ,",
      },
      read: {
        type: Boolean,
        required: false,
        comment:
          "Read, p_boolean, false, true, true, true, true, true, true, , , , ,",
      },
      sent: {
        type: Date,
        comment:
          "Sent, calendar_12, false, true, true, true, true, true, true, , , , ,",
      },

      createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
      updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    },
    {
      timestamps: true,
    },
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
