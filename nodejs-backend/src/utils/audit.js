module.exports = {
  before: {
    update(context) {
      createAuditLog(context, 'update');
      return context;
    },
    patch(context) {
      createAuditLog(context, 'patch');
      return context;
    },
    remove(context) {
      createAuditLog(context, 'remove');
      return context;
    },
  },
  after: {
    update(context) {
      createAuditLog(context, 'update', context.result);
      return context;
    },
    patch(context) {
      createAuditLog(context, 'patch', context.result);
      return context;
    },
    remove(context) {
      createAuditLog(context, 'remove', context.result);
      return context;
    },
  },
  error: {},
};

function createAuditLog(context, action, result = null) {
  const { app, method, params, data } = context;
  const userId = params.user ? params.user._id : 'unknown';

  const auditData = {
    action,
    createdBy: userId,
    serviceName: context.path,
    method,
    details: JSON.stringify(data || result || {}),
  };

  if (userId != 'unknown') app.service('audits').create(auditData);
}
