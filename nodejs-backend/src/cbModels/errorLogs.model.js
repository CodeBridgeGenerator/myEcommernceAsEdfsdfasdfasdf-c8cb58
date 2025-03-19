module.exports = function (app) {
  const modelName = "error_logs";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      serviceName: {
        type: String,
        required: true,
        maxLength: 1000,
        comment:
          "ServiceName, p, false, true, true, true, true, true, true, , , , ,",
      },
      errorMessage: {
        type: String,
        maxLength: 150,
        index: true,
        trim: true,
        comment:
          "ErrorMessage, p, false, true, true, true, true, true, true, , , , ,",
      },
      message: {
        type: String,
        required: true,
        maxLength: 1000,
        comment:
          "Message, p, false, true, true, true, true, true, true, , , , ,",
      },
      stack: {
        type: String,
        required: true,
        maxLength: 1000,
        comment: "Stack, p, false, true, true, true, true, true, true, , , , ,",
      },
      details: {
        type: String,
        maxLength: 1000,
        index: true,
        trim: true,
        comment:
          "Details, p, false, true, true, true, true, true, true, , , , ,",
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
