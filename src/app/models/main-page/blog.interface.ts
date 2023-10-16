export interface IBlog {
  id?: number,
  date?: string,
  date_gmt?: string,
  guid?: ITitle,
  modified?: string,
  modified_gmt?: string,
  slug?: string,
  status?: string,
  type?: string,
  link?: string,
  title?: ITitle,
  content?: IContent,
  excerpt?: IExcerpt,
  author?: number,
  featured_media?: number,
  comment_status?: string,
  ping_status?: string,
  sticky?: boolean,
  template?: string,
  format?: string,
  meta?: string[],
  categories?: number[],
  tags?: number[],
  _embedded?: any
}

export interface IExcerpt {
  rendered?: string,
  protected?: boolean
}

export interface IContent {
  rendered?: string,
  protected?: boolean
}

export interface ITitle {
  rendered?: string
}

export interface ICaption {
  rendered?: string
}

export interface IMediaDetails {
  width?: number,
  height?: number,
  file?: string,
  sizes?: number,
  image_meta?: IImageMeta
}

export interface IImageMeta {
  aperture?: string,
  credit?: string,
  camera?: string,
  caption?: string,
  created_timestamp?: string,
  copyright?: string,
  focal_length?: string,
  iso?: string,
  shutter_speed?: string,
  title?: string,
  orientation?: string,
  keywords?:string []
}

export interface ILinks {
  self: IHref[],
  collection: IHref[],
  about: IHref[],
  author?: IAuthor[],
  replies: IAuthor[]
}

export interface IHref {
  href?: string
}

export interface IAuthor {
  embeddable?: boolean,
  href?: string
}
