module.exports = function (app) {
  const modelName = "user_phones";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        comment:
          "User, dropdown, true, true, true, true, true, true, true, users, users, one-to-one, name,",
      },
      countryCode: {
        type: Number,
        max: 1000000,
        comment:
          "Countrycode, default, false, true, true, true, true, true, true, , , , ,",
      },
      operatorCode: {
        type: Number,
        max: 1000000,
        comment:
          "Operatorcode, default, false, true, true, true, true, true, true, , , , ,",
      },
      number: {
        type: String,
        maxLength: 150,
        index: true,
        trim: true,
        comment:
          "Number, p, false, true, true, true, true, true, true, , , , ,",
      },
      type: {
        type: String,
        enum: ["Land line", "Mobile", "Fax", "WA Only", "SMS Only"],
        comment:
          "Type, dropdownArray, true, true, true, true, true, true, true, , , , ,",
      },
      isDefault: {
        type: Boolean,
        required: false,
        default: true,
        comment:
          "Is Default, p_boolean, false, true, true, true, true, true, true, , , , ,",
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
