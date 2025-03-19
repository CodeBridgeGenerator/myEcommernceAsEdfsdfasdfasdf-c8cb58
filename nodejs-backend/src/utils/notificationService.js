module.exports = {
  after: {
    create(context) {
      // console.debug("createAuditLog called with context:", context);
      createNotification(context, 'created', context.result);
      return context;
    },
    update(context) {
      // console.debug("updateAuditLog called with context:", context);
      createNotification(context, 'updated', context.result);
      return context;
    },
    patch(context) {
      // console.debug("patchAuditLog called with context:", context);
      createNotification(context, 'updated', context.result);
      return context;
    },
    remove(context) {
      // console.debug("removeAuditLog called with context:", context);
      createNotification(context, 'removed', context.result);
      return context;
    },
  },
};

function createNotification(context, action, result = null) {
  const { app, params } = context;

  if (
    context.path === 'notifications' ||
    context.path === 'authentication' ||
    context.path === 'audits' ||
    context.path === 'documentStorages' ||
    context.path === 'mailQues' ||
    context.path === 'userInvites' ||
    context.path === 'loginHistory'
  ) {
    return context;
  }

  const userId = params.user ? params.user.name : 'system';

  const notificationData = {
    toUser: userId,
    content: `${context.path} with id ${result._id} was ${action}`,
    read: false,
    sent: new Date(),
    createdBy:
      params && params.user && typeof params.user._id !== 'undefined'
        ? params.user._id
        : null,
    updatedBy:
      params && params.user && typeof params.user._id !== 'undefined'
        ? params.user._id
        : null,
    path: `${context.path}`,
  };

  try {
    app.service('notifications').create(notificationData);
  } catch (error) {
    console.error('Error creating notification:', error);
  }
}
