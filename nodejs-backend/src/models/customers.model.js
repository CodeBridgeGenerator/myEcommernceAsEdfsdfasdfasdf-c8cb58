
    module.exports = function (app) {
        const modelName = "customers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , required: true, comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
userId: { type: Schema.Types.ObjectId, ref: "users", comment: "User Id, dropdown, false, true, true, true, true, true, true, users, users, one-to-one, name," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };