const debounce = <T extends Function>(func: T, wait: number) => {
  let timer: any = null

  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

export { debounce }
