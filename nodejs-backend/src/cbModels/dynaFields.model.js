module.exports = function (app) {
  const modelName = "dyna_fields";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      dynaLoader: {
        type: Schema.Types.ObjectId,
        ref: "dyna_loader",
        comment:
          "DynaLoader, dropdown, false, true, true, true, true, true, true, dynaLoader, dyna_loader, one-to-one, name,",
      },
      from: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        comment:
          "From Field, p, false, true, true, true, true, true, true, , , , ,",
      },
      fromType: {
        type: Schema.Types.Mixed,
        required: true,
        comment:
          "From Field Type, p, false, true, true, true, true, true, true, , , , ,",
      },
      to2: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        comment:
          "To Field, p, false, true, true, true, true, true, true, , , , ,",
      },
      toType: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        default: "",
        comment:
          "To Field Type, p, false, true, true, true, true, true, true, , , , ,",
      },
      fromRefService: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        comment:
          "From Ref Service, p, false, true, true, true, true, true, true, , , , ,",
      },
      toRefService: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        default: "",
        comment:
          "To Ref Service, p, false, true, true, true, true, true, true, , , , ,",
      },
      fromIdentityFieldName: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        default: "",
        comment:
          "From Field Identity, p, false, true, true, true, true, true, true, , , , ,",
      },
      toIdentityFieldName: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        default: "",
        comment:
          "To Field Identity, p, false, true, true, true, true, true, true, , , , ,",
      },
      fromRelationship: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        default: "",
        comment:
          "From Field Relationship, p, false, true, true, true, true, true, true, , , , ,",
      },
      toRelationship: {
        type: String,
        minLength: 2,
        maxLength: 150,
        index: true,
        trim: true,
        default: "",
        comment:
          "To Field Relationship, p, false, true, true, true, true, true, true, , , , ,",
      },
      duplicates: {
        type: Boolean,
        required: true,
        default: false,
        comment:
          "Duplicates, p, false, true, false, true, true, true, false, , , , ,",
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
