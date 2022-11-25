import style from './style.module.scss'

interface DemoBlockProps {
  children?: any
}

const DemoBlock = ({ children }: DemoBlockProps) => {
  return <div className={style.container}>{children}</div>
}

export { DemoBlock }
