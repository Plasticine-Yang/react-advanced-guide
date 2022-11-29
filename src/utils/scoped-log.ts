/**
 * @description console.log with scope
 */
const createLoggerWithScope = (scope: string) => {
  const scopedLog = (message: any, ...optionalParams: any[]) =>
    console.log(`[${scope}]`, message, ...optionalParams)

  return {
    log: scopedLog,
  }
}

export { createLoggerWithScope }
