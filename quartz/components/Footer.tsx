import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <a href="https://github.com/chishxd">GitHub</a> <br> <a href="https://www.linkedin.com/in/chinmay-shet0">LinkedIn</a>
        </p>
        </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
