export interface Crumb {
  title: string
  link: string | null
}

export interface BreadcrumbsType {
  crumbs: Crumb[]
}
