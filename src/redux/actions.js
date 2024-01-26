export const markModuleCompleted = (moduleName) => ({
    type: 'MARK_MODULE_COMPLETED',
    payload: moduleName,
  });
  
  export const initializeModuleCompletion = (moduleName) => ({
    type: 'MODULE_COMPLETION_INITIALIZE',
    payload: moduleName,
  });
  
  export const activeModule = (moduleName) => ({
    type: 'ACTIVE_MODULE',
    payload: moduleName,
  });
  